<template>
  <div class="product-layout">     
    <SfLoader
      :class="color"
      :loading="relatedLoading"
    >    
      <div id="product">
        <div class="product">
          <!--<button @click="debugAlert(product)">Click me</button>-->
          <SfHero
            :style="{
              width: '500px',
            }"
            :slider-options="{ autoplay: false }"
          >
            <SfHeroItem
              v-for="(image, a) in product.images"
              :key="`item-${a}`"
              :style="{
                backgroundImage: `url(${image.originalSrc})`,
                backgroundSize: '100% 100%',
                width: '500px',
                margin: '0px',
              }"
            >
            </SfHeroItem>
          </SfHero>
          <div class="product__info">
            <div class="product__details">
              <SfAlert
                v-if="!(getAllStock(product) > getCartCount(cartProducts, productGetters.getName(product)))"
                :message="$t('Out of Stock')"
                type="warning"
                class="product__stock-information"
              >
                <template #icon>
                  <SfIcon
                    color="yellow-primary"
                    icon="info_shield"
                    size="lg"
                    view-box="0 0 24 24"
                  />
                </template>
              </SfAlert>
            </div>
            <LazyHydrate when-idle>
              <SfTabs :open-tab="1" class="product__tabs">
                <SfTab data-cy="product-tab_description" title="Description">
                  <div v-if="productDescriptionHtml" class="product__description">
                    <div v-html="productDescriptionHtml"></div>
                  </div>
                  <div>price : {{ $n(productGetters.getPrice(product).special, 'currency')}} </div>
                  <div>stock : {{ getAllStock(product) }}</div>
                  <div>cart register quantity : {{ getCartCount(cartProducts, productGetters.getName(product)) }}</div>
                  <div>To add description</div>
                </SfTab>
                <SfTab
                  :title="$t('Additional Information')"
                  data-cy="product-tab_additional"
                  class="product__additional-info"
                >
                  <div class="product__additional-info">
                    <p class="product__additional-info__title">
                      To add additional info 1
                    </p>
                    <p class="product__additional-info__title">
                      To add additional info 2
                    </p>
                  </div>
                </SfTab>
              </SfTabs>
            </LazyHydrate>
          </div>
          <div class="d-flex flex-direction-column align-items-center">
            <div
              v-for="(eachProduct, a) in allProducts"
              class="d-flex align-items-center flex-grow"
              :key="a"
            >
              <SfLink
                :link="
                  localePath(
                    getSimpleId(
                      eachProduct.id,
                      eachProduct.handle
                    )
                  )"
              >
                <div class="d-flex align-items-center">
                  <p :style="{fontSize: '30px', color: 'blue'}">{{ eachProduct.title }}</p>
                  <img
                    :src="getImagePath(eachProduct)"
                    :style="{ width: '100px', height: '150px', marginLeft: '30px' }"
                  />
                </div>
              </SfLink>
            </div>
          </div>
        </div>        
        <!-- \\STORE FOOTER -->
        <div :class="['product-footer']">
          <div class="product-footer__container" :class="color">
            <div class="product-footer__title">
              {{ productGetters.getName(product) }} - {{colorIndex}}
            </div>
            <div class="product-footer__content">
              <div :class="[registrationBarIsVisible ? 'showColor' : 'hideColor']">
                <div
                  v-if="options && Object.keys(options).length > 0"
                  class="product__variants"
                >
                  <div class="product__colors">
                    <template v-for="(option, key) in options">                  
                      <div class="product__flex-break"></div>
                      <SfColor
                        v-for="(attribs, a) in option"
                        :key="`item-${a}`"
                        label="Color"
                        data-cy="product-color_update"
                        :color="attribs"
                        :class="`product__color ${attribs}`"
                        :selected="
                          colorIndex
                            ? colorIndex == attribs
                              ? true
                              : false
                            : a === 0
                            ? true
                            : false
                        "
                        @click="
                          (atttLbl = key), updateTheme({ [atttLbl]: attribs })
                        "
                      />                  
                    </template>
                  </div>
                </div>
              </div>
              <!--<div
                :class="[
                  registrationBarIsVisible
                    ? 'hideProductThumb'
                    : 'showProductThumb',
                ]"
              >
                <img :src="productGallery[ActiveVariantImage].mobile.url" alt="" />
              </div>-->
            </div>
            <div class="product-footer__action">
              <SfAddToCart
                :disabled="!productGetters.getStockStatus(product)"
                data-cy="product-cart_add"
                :stock="stock"
                :can-add-to-cart="stock > 0"
                class="product__add-to-cart"
              >
                <template #quantity-select-input><div></div></template>
                <template #add-to-cart-btn>
                  <SfButton
                    class="sf-add-to-cart__button color-light cursor-pointer"
                    :disabled="loading || !(getAllStock(product) > getCartCount(cartProducts, productGetters.getName(product)))"
                    @click="
                      addingToCart({
                        product,
                        quantity: parseInt(qty),
                        customQuery: [
                          { key: 'CustomAttrKey', value: 'CustomAttrValue' },
                        ],
                      })
                    "
                  >
                    add to cart {{ $n(productGetters.getPrice(product).special, 'currency')}} 
                  </SfButton>
                </template>
              </SfAddToCart>
            </div>
          </div>
        </div>
      </div>      
    </SfLoader>    
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfAlert,
  SfBreadcrumbs,
  SfLoader,
  SfButton,
  SfColor,
  SfLink,
  SfHero
} from '@storefront-ui/vue';
import {
  ref,
  computed,
  watch,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api';
import { useProduct, useCart, productGetters, cartGetters, useContent, useReview } from '@vue-storefront/shopify';
import LazyHydrate from 'vue-lazy-hydration';
import { onSSR } from '@vue-storefront/core';
import useUiNotification from '~/composables/useUiNotification';

export default {
  name: 'Product',
  components: {
    SfAlert,
    SfColor,
    SfLoader,
    SfProperty,
    SfHeading,
    SfPrice,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfBreadcrumbs,
    SfButton,
    LazyHydrate,
    SfLink,
    SfHero
  },
  beforeRouteEnter(__, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  transition: 'fade',
  computed: {
		color() {
      return this.$store.getters['colors/getColorValue'];
		},
    colorIndex() {
      return this.$store.state.colors.colorIndex;
		},
    allProducts() {
      return this.$store.state.products.products;
		},
	},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const breadcrumbs = ref([]);
    const atttLbl = '';
    const qty = ref(1);
    const { slug } = route?.value?.params;
    const {
      loading: contextsLoading,
      content,
      search: contentSearch,
    } = useContent();
    const {
      loading: productloading,
      products,
      search,
    } = useProduct('products');
    const { send: sendNotification } = useUiNotification();
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
      meta
    } = useProduct('relatedProducts');
    const { addItem, loading, cart, load } = useCart();

    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route?.value?.query,
        })[0]
    );

    const id = computed(() => productGetters.getId(product.value));

    const { reviews, loading: loadingReview, error, search: searchReview } = useReview()

    const originalId = computed(() =>
      productGetters.getProductOriginalId(product.value)
    );
    const productTitle = computed(() => productGetters.getName(product.value));
    const productCoverImage = computed(() =>
      productGetters.getPDPCoverImage(product.value)
    );
    const productDescription = computed(() =>
      productGetters.getDescription(product.value)
    );
    const productDescriptionHtml = computed(() =>
      productGetters.getDescription(product.value, true)
    );
    const options = computed(() =>
      productGetters.getAttributes(products.value)
    );
    const configuration = computed(() => {
      return productGetters.getSelectedVariant(route?.value?.query);
    });

    const setBreadcrumb = () => {
      breadcrumbs.value = [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'products',
          link: '#',
        },
        {
          text: productTitle.value,
          link: '#',
        },
      ];
    };

    watch(
      productTitle,
      (currproductTitle, prevproductTitle) => {
        if (currproductTitle !== prevproductTitle) {
          setBreadcrumb();
        }
      },
      { deep: true }
    );
    const productGallery = computed(() => {
      if (product.value && product.value.images.length === 0) {
        product.value.images.push({
          originalSrc:
            'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127',
        });
      }
      return productGetters.getProductGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: product.value._name || product.value.name,
      }));
    });

    const AgnosticMediaGalleryItem = computed(() => {
      if (product.value) {
        product.value.images.push({
          originalSrc:
            'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127',
        });
      }
      return productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: product.value._name || product.value.name,
      }));
    });

    const stock = computed(() => {
      return productGetters.getStock(product.value);
    });
    const ActiveVariantImage = computed(() => {
      return productGetters.getVariantImage(product.value) || 0;
    });    

    onSSR(async () => {
      await search({ slug, selectedOptions: configuration.value }).then(() => {
        // "Product Title" serve as the flag if the product is existing or not
        if (!productTitle.value) {
          return route?.value?.error({
            statusCode: 404,
            message: 'This product could not be found',
          });
        }
      });
      await searchRelatedProducts({ productId: id.value, related: true, metafields: true });
      await load();
      await contentSearch({ handle: 'version1', contentType: 'video' });
      await searchReview({ productId: id.value });
    });
    const updateFilter = (filter) => {
      // console.log(store);
      
      if (options.value) {
        Object.keys(options.value).forEach((attr) => {
          if (attr in filter) {
            return;
          }
          filter[attr] =
            Object.keys(configuration.value).length > 0
              ? configuration.value[attr]
              : options.value[attr][0];
        });
      }
      router.push({
        path: route?.value?.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    const getSimpleId = (gId, slug) => {
      var simpleId = gId;
      if (gId.indexOf("gid") != -1) {
        simpleId = gId.substring(gId.lastIndexOf("/") + 1);
      }

      return `/p/${simpleId}/${slug}`;
    };

    return {
      cart,
      content,
      updateFilter,
      configuration,
      product,
      productDescription,
      productCoverImage,
      productDescriptionHtml,
      ActiveVariantImage,
      sendNotification,
      originalId,
      getSimpleId,
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      stock,
      productTitle,
      breadcrumbs,
      qty,
      addItem,
      loading,
      productloading,
      productGallery,
      productGetters,
      setBreadcrumb,
      atttLbl,
      cartProducts: computed(() => cartGetters.getItems(cart.value)),
      reviews
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      registrationBarIsVisible: true,
    };
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async mounted() {
    window.addEventListener('load', () => {
      this.setGalleryWidth();
    });
    this.$nextTick(() => {
      this.setGalleryWidth();
      this.setBreadcrumb();
      window.addEventListener('resize', this.setGalleryWidth);
    });
    window.addEventListener('scroll', this.onScroll, { passive: true });
    console.log(this.product.id)
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updated() {
    this.setGalleryWidth();
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    debugAlert(logValue) {
      console.error("sdfsdfsdf : ", logValue);
      alert(logValue);
    },
    getImagePath(product) {
      var ret = product._coverImage.src;
      product.variants.forEach(variant => {
        if (variant.selectedOptions[0].value == this.$store.state.colors.colorIndex)
          ret = variant.image.src;
      });
      return ret;
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
      if (product) {
        product.variants.forEach(variant => {
          if (variant.selectedOptions[0].value == this.$store.state.colors.colorIndex)
            allStock = variant.sku * 1;
        });
      }
      return allStock;
    },
    async addingToCart(Productdata) {
      console.log(Productdata.product);
      await this.addItem(Productdata).then(() => {
        this.sendNotification({
          key: 'product_added',
          message: `${Productdata.product.name} has been successfully added to your cart.`,
          type: 'success',
          title: 'Product added!',
          icon: 'check',
        });
        this.qty = 1;
      });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    updatedQuantity(value) {
      this.qty = value;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setGalleryWidth() {
      const gallary = document.getElementsByClassName('product__gallery');
      const gallerySlider =
        gallary.length > 0 && gallary[0].querySelectorAll('.glide__slides');
      const galleryAllSlides =
        gallerySlider.length > 0 &&
        gallerySlider[0].querySelectorAll('.glide__slide');
      typeof galleryAllSlides !== 'boolean' &&
        galleryAllSlides.length > 0 &&
        galleryAllSlides.forEach((gallerySlide) => {
          gallerySlide.style.flexBasis = gallerySlide.style.width;
        });
    },

    onScroll() {
      this.showProductFooter();
    },

    showProductFooter() {
      try {
        // Show bottom registration bar until registration banner is reached
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementTarget = document.getElementById(
          'registration-banner-breakpoint'
        );
        const showRegistrationBar = scrollPosition < elementTarget.offsetTop;
        if (this.registrationBarIsVisible !== showRegistrationBar) {
          this.registrationBarIsVisible = showRegistrationBar;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.error(`Error pinning registration banner: ${e.toString()}`);
      }
    },

    updateTheme(filter) {
      this.$store.commit('colors/setColorIndex', filter.Color);
      this.updateFilter(filter);
    }
  },
};
</script>

<style lang="scss" scoped>
.pdc-pdp-loader {
  min-height: 100px;
  padding: 100px 0;
}

#product {
  box-sizing: border-box;
  padding-top: 30px;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__details {
    margin: 0 var(--spacer-sm) var(--spacer-base);

    @include for-desktop {
      margin: var(--spacer-lg) 0;
    }
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--xs),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    flex-wrap: wrap;
  }
  &__color-label {
    margin: 0 var(--spacer-lg) var(--spacer-xs) 0;
    padding: 0 0 0 4px;
  }
  &__color {
    margin: 0 var(--spacer-xs);
  }
  &__add-to-cart,
  &__stock-information {
    margin-top: var(--spacer-xl);
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    --tabs-title-z-index: 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
  &__flex-break {
    flex-basis: 100%;
    height: 0;
  }
}
.product-footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  left: 0;
  right: 0;
  border: 0;  

  &__container {
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    min-height: 100px;
    justify-content: space-between;
    align-items: center;
    color: blue;
  }
  &__title {
    display: flex;
  }

  &__action {
    display: flex;
    justify-content: flex-end;
  }
}
.hideColor {
  display: none;
}

.showColor {
  display: block;
}
.showProductThumb {
  display: block;
  position: absolute;
  bottom: 0;
}

.hideProductThumb {
  display: none;
}

.sf-link {
  text-decoration: none;
}
// .breadcrumbs {
//   margin: var(--spacer-base) auto var(--spacer-lg);
// }
// .banner-app {
//   --banner-container-width: 100%;
//   --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
//   --banner-padding: 0 var(--spacer-2xl);
//   --banner-title-font-size: var(--h1-font-size);
//   --banner-subtitle-font-size: var(--font-size--xl);
//   --banner-title-font-weight: var(--font-weight--semibold);
//   --banner-subtitle-font-weight: var(--font-weight--medium);
//   --banner-title-text-transform: capitalize;
//   --banner-subtitle-text-transform: capitalize;
//   display: block;
//   min-height: 26.25rem;
//   max-width: 65rem;
//   margin: 0 auto;
//   padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
//   &__call-to-action {
//     --button-background: transparent;
//     display: flex;
//   }
//   &__button {
//     --image-width: 8.375rem;
//     --image-height: 2.75rem;
//     --button-padding: 0;
//     & + & {
//       margin: 0 0 0 calc(var(--spacer-xl) / 2);
//     }
//   }
// }
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.product-layout {
  min-height: calc(100vh - 170px);
}
.product__add-to-cart{
  margin-top: 0;
}
.sf-add-to-cart__button {
  border: 1px solid blue;
  border-radius: 18px;
  padding: 9px 10px;
  color: blue;
}
</style>
