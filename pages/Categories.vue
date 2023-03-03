<template>
    <div id="home">
      <LazyHydrate when-visible>
        <RelatedProducts
          :products="products"
          :loading="productsLoading"          
        />
      </LazyHydrate>
    </div>
  </template>
  <script type="module">
  import {
    SfHero,
    SfBanner,
    SfCallToAction,
    SfBannerGrid,
  } from "@storefront-ui/vue";
  import { useProduct, useCart, productGetters } from "@vue-storefront/shopify";
  import { computed } from "@nuxtjs/composition-api";
  import LazyHydrate from "vue-lazy-hydration";
  import MobileStoreBanner from "~/components/MobileStoreBanner.vue";
  import RelatedProducts from "~/components/RelatedProducts.vue";
  import { onSSR } from "@vue-storefront/core";
  
  export default {
    name: "Products",
    components: {
      SfHero,
      RelatedProducts,
      SfBanner,
      SfCallToAction,
      SfBannerGrid,
      MobileStoreBanner,
      LazyHydrate,
    },
    setup() {
      const {
        products: relatedProducts,
        search: productsSearch,
        loading: productsLoading,
      } = useProduct("candle");
      const { cart, addItem: addToCart, isInCart } = useCart();
  
      onSSR(async () => {
        await productsSearch({ limit: 3 });
      });
      return {
        products: computed(() =>
          productGetters.getFiltered(relatedProducts.value, { master: true })
        ),
        getChkId: computed(() => cart.value.id),
        productsLoading,
        productGetters,
        addToCart,
        isInCart,
      };
    },  
    methods: {
      toggleWishlist(index) {
        this.products[index].isInWishlist = !this.products[index].isInWishlist;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  #home {
    box-sizing: border-box;
    padding: 0 var(--spacer-sm);
    @include for-desktop {
      max-width: 1240px;
      padding: 0;
      margin: 0 auto;
    }
  }
  .hero {
    margin: var(--spacer-xl) auto var(--spacer-lg);
    --hero-item-background-position: center;
    @include for-desktop {
      margin: var(--spacer-xl) auto var(--spacer-2xl);
    }
    .sf-hero-item {
      &:nth-child(even) {
        --hero-item-background-position: left;
        @include for-mobile {
          --hero-item-background-position: 30%;
          ::v-deep .sf-hero-item__subtitle,
          ::v-deep .sf-hero-item__title {
            text-align: right;
            width: 100%;
            padding-left: var(--spacer-sm);
          }
        }
      }
    }
    ::v-deep .sf-hero__control {
      &--right,
      &--left {
        display: none;
      }
    }
  }
  .banner-grid {
    --banner-container-width: 50%;
    margin: var(--spacer-xl) 0;
    ::v-deep .sf-link:hover {
      color: var(--c-white);
    }
    @include for-desktop {
      margin: var(--spacer-2xl) 0;
      ::v-deep .sf-link {
        --button-width: auto;
        text-decoration: none;
      }
    }
  }
  .banner {
    &__tshirt {
      background-position: left;
    }
    &-central {
      @include for-desktop {
        --banner-container-flex: 0 0 70%;
      }
    }
  }
  .similar-products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--spacer-2xs);
    --heading-padding: 0;
    border-bottom: 1px var(--c-light) solid;
    @include for-desktop {
      border-bottom: 0;
      justify-content: center;
      padding-bottom: 0;
    }
  }
  .call-to-action {
    background-position: right;
    margin: var(--spacer-xs) 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
    }
  }
  .carousel {
    margin: 0 calc(0 - var(--spacer-sm)) 0 0;
    @include for-desktop {
      margin: 0;
    }
    &__item {
      margin: 1.375rem 0 2.5rem 0;
      @include for-desktop {
        margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
      }
      &__product {
        --product-card-add-button-transform: translate3d(0, 30%, 0);
      }
    }
    ::v-deep .sf-arrow--long .sf-arrow--right {
      --arrow-icon-transform: rotate(180deg);
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  }
  </style>
  