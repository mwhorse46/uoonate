<template>
  <div>
    <SfHeader
      data-cy="app-header"
      :cart-items-qty="cartTotalItems"
      :account-icon="accountIcon"
      class="sf-header--has-mobile-search"
      :class="color"
      @click:cart="toggleCartSidebar"
      @click:wishlist="toggleWishlistSidebar"
      @click:account="
        isUserAuthenticated
          ? $router.push(localePath({ name: 'my-account' }))
          : toggleLoginModal()
      "
    >
      <template v-if="menus.length > 0" #navigation>
        <div class="navigation-wrapper">
          <SfHeaderNavigationItem
            v-for="menu in menus"
            :key="menu.id"
            class="nav-item"
            :data-cy="'app-header-url_' + menu.handle"
            :label="menu.title"
            :link="localePath(getMenuPath(menu))"
          />
        </div>
      </template>

      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath('/')" class="sf-header__logo">
          <Logo />
        </nuxt-link>
      </template>
      <template #search class="d-none">
        <div></div>
      </template>
      <template #header-icons>
        <div class="sf-header__icons">
          <SfButton
            v-if="isUserAuthenticated"
            class="sf-button--pure sf-header__action"
            @click="$router.push(localePath({name:'my-account'}))"
          >
            <SfIcon :icon="accountIcon" size="1.25rem" />
          </SfButton>
          <SfButton
            v-else
            class="sf-button--pure sf-header__action"
            @click="toggleLoginModal()"
          >
          <SfIcon :icon="accountIcon" size="1.25rem" />
          </SfButton>
          <SfButton
            v-e2e="'app-header-cart'"
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            Cart
            <!-- <SfIcon class="sf-header__icon" icon="empty_cart" size="1.25rem" /> -->
            <SfBadge
              v-if="cartTotalItems"
              class="sf-badge--number cart-badge"
              >{{ cartTotalItems }}
            </SfBadge>
          </SfButton>
        </div>
      </template>
    </SfHeader>
  </div>
</template>

<script type="module">
import {
  SfImage,
  SfButton,
  SfBadge,
  SfIcon,
  SfOverlay
} from '@storefront-ui/vue';
import Logo from './OBrand/Logo.vue';
import debounce from 'lodash/debounce';
import { onSSR } from '@vue-storefront/core';
import {
  computed,
  ref,
  watch,
  useRoute,
  useContext
} from '@nuxtjs/composition-api';
import { useUiHelpers, useUiState } from '~/composables';
import SfHeader from './SfHeader/SfHeader.vue';

import {
  searchGetters,
  useCategory,
  useSearch,
  useContent
} from '@vue-storefront/shopify';

export default {
  components: {
    SfImage,
    SfIcon,
    SfButton,
    SfOverlay,
    SfBadge,
    Logo,
    SfHeader
  },
  props: {
    cartTotalItems: {
      type: Number,
      default: 0
    },
    isUserAuthenticated: Boolean
  },
  computed: {
		color() {
      return this.$store.getters['colors/getColorValue'];
			// return this.$store.state.colors.colorIndex
		},
	},
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props) {
    const context = useContext();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal } =
      useUiState();
    const { changeSearchTerm, getFacetsFromURL } = useUiHelpers();
    const { search: headerSearch, result } = useSearch('header-search');
    const { search, categories } = useCategory('menuCategories');
    const { search: getArticles, content: articlesContent } =
      useContent('articles');

    const curCatSlug = ref(getFacetsFromURL().categorySlug);
    const accountIcon = computed(() =>
      props.isUserAuthenticated ? 'profile_fill' : 'profile'
    );

    // #region Search Section
    const isSearchOpen = ref(false);
    const term = ref(getFacetsFromURL().term);
    const route = useRoute();
    const handleSearch = debounce(async (searchTerm) => {
      if (!searchTerm.target) {
        term.value = searchTerm;
      } else {
        term.value = searchTerm.target.value;
      }

      await headerSearch({
        term: term.value
      });
      await getArticles({
        contentType: 'article',
        query: term.value,
        first: 5
      });
    }, 500);

    watch(route, () => {
      hideSearch();
      term.value = '';
    });

    const hideSearch = () => {
      if (isSearchOpen.value) {
        isSearchOpen.value = false;
        if (document) {
          document.body.classList.remove('no-scroll');
        }
      }
    };

    const closeSearch = () => {
      if (!isSearchOpen.value) return;
      term.value = '';
      isSearchOpen.value = false;
    };

    const searchResults = computed(() =>
      !term.value
        ? { products: [], articles: [] }
        : {
            products: searchGetters.getItems(result.value),
            articles: articlesContent?.value?.data
          }
    );
    // #endregion Search Section

    onSSR(async () => {
      await search({ slug: '' });
    });
    const menus = computed(() => [
      { id: 'shop', title: 'Shop', link:"/categories" },
      { id: 'impact', title: 'Impact', link:"/impact" }
    ]);

    const getMenuPath = (menu) => {
      return menu.link;
    };

    return {
      getMenuPath,
      accountIcon,
      hideSearch,
      closeSearch,
      toggleLoginModal,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      term,
      handleSearch,
      curCatSlug,
      searchResults,
      menus,
      isSearchOpen,
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header {
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }  
  &__header {
    min-width: 90%;
  }
}
.sf-header__wrapper {
  background-color: red !important;
  & .sf-search-bar {
    display: none;
  }
}
.header-on-top {
  z-index: 2;
}
.navigation-wrapper {
  display: flex;
  width: min-content;
}
.sf-search-bar {
  @include for-desktop {
    max-width: 20rem;
    width: 100%;
  }
}
.nav-item {
  flex: 0;
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
  &--mobile {
    padding: var(--spacer-xs) 0;
  }
  ::v-deep &__item--mobile {
    display: block;
  }
  ::v-deep .nuxt-link-active {
    color: var(--c-primary);
    --header-navigation-item-border-color: var(--c-primary);
  }
}
.cart-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
</style>
