<template>
  <SfSection
    :title-heading="title"
    class="section pdc-sec-title pdp-upsell-section"
  >
    <SfLoader :class="{ loading }" :loading="loading">      
      <SfCarousel
        ref="bscarousel"
        data-cy="related-products-carousel"
        :settings="pdpUpsellSettings"
        class="carousel"
      >
        <SfCarouselItem
          v-for="(product, i) in products"
          :key="i"
          class="carousel__item"
        >
          <!--<button @click="debugAlert(product)">Click me</button>-->
          <SfProductCard
            :title="productGetters.getName(product)"
            :image="getImagePath(product)"
            :is-added-to-cart="isInCart({ product, currentCart })"
            :show-add-to-cart-button="false"
            :add-to-cart-disabled="!productGetters.getStockStatus(product)"
            :link="localePath(getSimpleId(productGetters.getId(product), productGetters.getSlug(product)))"            
            :wishlist-icon="false"
            :image-width="$device.isDesktopOrTablet ? 212 : 154"
            :image-height="$device.isDesktopOrTablet ? 320 : 232"
            class="pdp-product-card"
            :class="color"
            @click:add-to-cart="
              handleAddToCart({ product, quantity: 1, currentCart })
            "
          >
            <template #image="imageSlotProps">
              <SfButton
                :link="imageSlotProps.link"
                aria-label="Go To Product"
                class="sf-button--pure sf-product-card__link"
                data-testid="product-link"
                v-on="$listeners"
              >
                <template>
                  <nuxt-img
                    :alt="imageSlotProps.title"
                    :height="imageSlotProps.imageHeight"
                    :src="imageSlotProps.image"
                    :width="imageSlotProps.imageWidth"
                    class="sf-product-card__image lol"
                  />
                </template>
              </SfButton>
            </template>
            <template #title>
              <!-- RYVIU APP :: COLLECTION-WIDGET-TOTAL -->
              <SfLink
                class="sf-product-card__link"  
                :link="localePath(getSimpleId(productGetters.getId(product), productGetters.getSlug(product)))"              
              >
                <h3 class="sf-product-card__title text-align-center">
                  {{ productGetters.getName(product) }}
                </h3>
              </SfLink>
            </template>
            <template #price>
              <SfPrice class="sf-product-card__price flex-center">
                <template
                  v-if="productGetters.getPrice(product).special"
                  #special
                >
                  <ins class="sf-price__special">{{
                    $n(productGetters.getPrice(product).special, "currency")
                  }}</ins>
                </template>
                <template #old><span /></template>
                <template
                  v-if="productGetters.getPrice(product).regular > 0"
                  #regular
                >
                  <del class="sf-price__old">{{
                    $n(productGetters.getPrice(product).regular, "currency")
                  }}</del>
                </template>
              </SfPrice>
            </template>
            <template #badge>
              <!-- RYVIU APP :: COLLECTION-WIDGET-TOTAL -->
              <span v-if="(getPreorderStatus(product) == true)" class="sf-badge--number sf-badge pre-order">Preorder</span>
              <span v-else-if="(getAllStock(product) <= getCartCount(cartProducts, productGetters.getName(product)))" class="sf-badge--number sf-badge out-stock">OutofStock</span>
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
  SfLink,
  SfPrice,
  SfButton,
} from "@storefront-ui/vue";
import {
  computed,
} from '@nuxtjs/composition-api';
import useUiNotification from "../composables/useUiNotification";
import { productGetters, useCart, cartGetters, useUserOrders } from "@vue-storefront/shopify";
import { onSSR } from '@vue-storefront/core';

export default {
  name: "RelatedProducts",
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
    SfLink,
    SfPrice,
    SfButton,
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean,
  },
  computed: {
		color() {
      return this.$store.getters['colors/getColorValue'];
		},
	},
  setup() {
    const { orders, search, loading } = useUserOrders();
    const { addItem: addItemToCart, isInCart, cart: currentCart, load } = useCart();
    const { send: sendNotification } = useUiNotification();

    const getStockCount = (product) => product?.totalInventory ?? 0;

    const getSimpleId = (gId, slug) => {

      var simpleId = gId;
      if (gId.indexOf("gid") != -1) {
        simpleId = gId.substring(gId.lastIndexOf('/') + 1);
      }

      return `/p/${simpleId}/${slug}`;
    };

    onSSR(async () => {
      await load();
      // await loadUser();
      await search();
    });

    return {
      currentCart,
      productGetters,
      sendNotification,
      addItemToCart,
      isInCart,
      getStockCount,
      getSimpleId,
      cartProducts: computed(() => cartGetters.getItems(currentCart.value)),
      orders: computed(() => orders ? orders.value : [])
    };
  },
  data() {
    return {
      pdpUpsellSettings: {
        type: "slider",
        perView: 4,
        peek: 0,
        autoplay: false,
        animationDuration: 600,
        gap: 20,
        breakpoints: {
          1023: {
            perView: 3,
            peek: {
              before: 0,
              after: 72,
            },
          },
          767: {
            perView: 2,
            peek: {
              before: 0,
              after: 72,
            },
          },
          510: {
            perView: 1,
            peek: {
              before: 0,
              after: 72,
            },
          },
        },
      },
    };
  },
  methods: {
    debugAlert(logValue) {
      // alert(logValue);
      console.log(logValue);
    },
    getCartCount(products, productName) {
      var ret = 0;
      products.forEach(product => {
        if (product.title == productName)
          ret = product.quantity;
      });
      return ret;
    },
    getAllStock(product) {
      var allStock = 0;
      product.variants.forEach(variant => {
        if (variant.selectedOptions[0].value == this.$store.state.colors.colorIndex)
          allStock = variant.sku * 1;
      });
      return allStock;
    },
    getPreorderStatus(product) {
      var preStatus = false;
      // for (var index = 0; index < product.tags.length; ++index) {
      //   let value = product.tags[index];
      //   if (value === "pre") {
      //     preStatus = true;
      //     break;
      //   }
      // }
      console.log(product)
      return preStatus;
    },
    getImagePath(product) {
      var ret = product._coverImage.src;
      product.variants.forEach(variant => {
        if (variant.selectedOptions[0].value == this.$store.state.colors.colorIndex)
          ret = variant.image.src;
      });
      return ret;
    },
    handleAddToCart(productObj) {
      this.addItemToCart(productObj).then(() => {
        this.sendNotification({
          key: "added_to_cart",
          message: "Product has been successfully added to cart !",
          type: "success",
          title: "Product added!",
          icon: "check",
        });
      });
    },
  },
};
</script>

<style lang="scss">
.out-stock {
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 99;
}
.pre-order {
  position: absolute;
  background-color: green;
  right: 10px;
  top: 20px;
  z-index: 99;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.text-align-center {
  text-align: center;
}
.pdp-upsell-section {
  margin: 0;
  padding-top: 30px;
  @include for-mobile {
    padding-bottom: 40px;
  }
  .sf-section__content {
    margin: 0;
  }
  .sf-carousel {
    @include for-desktop {
      margin: 0 -10px;
    }
  }
  .sf-carousel__controls {
    display: none;
  }
  .sf-product-card__link {
    overflow: hidden;
  }
  .sf-carousel__wrapper {
    max-width: 100%;
    margin: 0;
    @include for-desktop {
      padding: 10px;
    }
  }
  .glide__slide {
    height: auto;
  }
}

.sf-product-card {
  max-width: 70%;
  &__image {
    width: 100%;
    height: 50vh;
  }
  &__title {
    color: blue;
  }
}

.sf-price__special {
  color: blue;
}
</style>
