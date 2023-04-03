<template>
  <div>
    <LazyHydrate when-visible>
      <RelatedProducts :products="products" :loading="productsLoading" />
    </LazyHydrate>
    <AppFooter />
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

import AppFooter from '~/components/AppFooter.vue';

export default {
  name: "Products",
  components: {
    AppFooter,
    SfHero,
    RelatedProducts,
    SfBanner,
    SfCallToAction,
    SfBannerGrid,
    MobileStoreBanner,
    LazyHydrate,
  },
  mounted() {
    this.$store.commit('products/setProducts', this.products);
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

<style lang="scss" scoped></style>
