<template>
  <div>
    <!-- <client-only>
      <BottomNavigation />
    </client-only>   -->
    <client-only>
      <CartSidebar />
    </client-only>
    <client-only>
      <WishlistSidebar />
    </client-only>
    <client-only>
      <LoginModal />
    </client-only>
    <client-only>
      <NewsletterModal />
    </client-only>
    <LazyHydrate when-visible>
      <Notification />
    </LazyHydrate>
    <!-- <TopBar class="desktop-only" /> -->
    <div>
      <AppHeader
        :cart-total-items="getCartTotalItems"
        :is-user-authenticated="isAuthenticated"
      />
      <div id="layout" :class="color">
        <nuxt :key="route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import TopBar from "~/components/TopBar.vue";
import LazyHydrate from "vue-lazy-hydration";
import {
  useUser,
  cartGetters,
  useCart,
  userGetters,
} from "@vue-storefront/shopify";
import {
  computed,
  onBeforeMount,
  provide,
  useRoute,
  useContext,
} from "@nuxtjs/composition-api";
import LoadWhenVisible from "~/components/utils/LoadWhenVisible";
export default {
  name: "DefaultLayout",
  components: {
    LazyHydrate,
    TopBar,
    AppHeader,
    BottomNavigation: () =>
      import(/* webpackPrefetch: true */ "~/components/BottomNavigation.vue"),
    CartSidebar: () =>
      import(/* webpackPrefetch: true */ "~/components/CartSidebar.vue"),
    WishlistSidebar: () =>
      import(/* webpackPrefetch: true */ "~/components/WishlistSidebar.vue"),
    LoginModal: () =>
      import(/* webpackPrefetch: true */ "~/components/LoginModal.vue"),
    NewsletterModal: () =>
      import(/* webpackPrefetch: true */ "~/components/NewsletterModal.vue"),
    Notification: () =>
      import(/* webpackPrefetch: true */ "~/components/Notification"),
    LoadWhenVisible,
  },
  computed: {
    color() {
      return this.$store.getters["colors/getColorValue"];
      // return this.$store.state.colors.colorIndex
    },
  },
  setup() {
    const route = useRoute();
    const context = useContext();
    const { load: loadUser, user: userInfo } = useUser();
    const { load: loadCart, cart } = useCart();
    const getCartTotalItems = computed(() =>
      cartGetters.getTotalItems(cart.value)
    );
    const isAuthenticated = computed(
      () => !!userGetters.getFirstName(userInfo.value)
    );
    provide("currentCart", cart);
    onBeforeMount(async () => {
      await loadUser();
      await loadCart().then(() => {
        if (cart && cart.value && cart.value.orderStatusUrl !== null) {
          context.$cookies.remove(`${context.$config.appKey}_cart_id`);
        }
      });
    });

    return {
      getCartTotalItems,
      isAuthenticated,
      route,
    };
  },
};
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";

#layout {
  box-sizing: border-box;
  min-height: calc(100vh - 308px);
  @include for-desktop {
    max-width: 100%;
    margin: 0;
    padding: 0 var(--spacer-sm);
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  width: auto;
  @include for-mobile {
    overflow-x: hidden;
  }
}
body {
  overflow-x: hidden;
  color: var(--c-text);
  font-size: var(--h3-font-size);
  font-family: var(--font-family--primary);
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: var(--c-link);
  &:hover {
    color: var(--c-link-hover);
  }
}
h1 {
  font-family: var(--font-family--secondary);
  font-size: var(--h1-font-size);
  line-height: 1.6;
  margin: 0;
}
h2 {
  font-family: var(--font-family--secondary);
  font-size: var(--h2-font-size);
  line-height: 1.6;
  margin: 0;
}
h3 {
  font-family: var(--font-family--secondary);
  font-size: var(--h3-font-size);
  line-height: 1.6;
  margin: 0;
}
h4 {
  font-family: var(--font-family--secondary);
  font-size: var(--h4-font-size);
  line-height: 1.6;
  margin: 0;
}
</style>
