<template>
  <div id="category">
    <!-- <SfBreadcrumbs
      class="breadcrumbs breadcrumbs-center"
      :breadcrumbs="breadcrumbs"
    >
      <template #link="{ breadcrumb }">
        <nuxt-link
          :data-testid="breadcrumb.text"
          :to="breadcrumb.link ? localePath(breadcrumb.link) : ''"
          class="sf-link disable-active-link sf-breadcrumbs__breadcrumb"
        >
          {{ breadcrumb.text }}
        </nuxt-link>
      </template>
    </SfBreadcrumbs> -->
    <!-- sorting features panel -->
    <!-- <div class="navbar section">
      <div class="navbar__main">
        <div class="navbar__sort desktop-only">
          <span class="navbar__label">{{ $t('Sort by') }}:</span>
          <SfSelect
            :value="sortBy.selected"
            placeholder="Select sorting"
            data-cy="category-select_sortBy"
            class="navbar__select"
            @input="th.changeSorting"
          >
            <SfSelectOption
              v-for="option in sortBy.options"
              :key="option.id"
              :value="option.id"
              class="sort-by__option"
              >{{ option.value }}</SfSelectOption
            >
          </SfSelect>
        </div>
        <div class="navbar__counter">
          <span class="navbar__label desktop-only"
            >{{ $t('Products found') }}:
          </span>
          <span class="desktop-only">{{ pagination.totalItems }}</span>
          <span class="navbar__label smartphone-only"
            >{{ pagination.totalItems }} Items</span
          >
        </div>
        <div class="navbar__view">
          <span class="navbar__view-label desktop-only">{{ $t('View') }}</span>
          <SfIcon
            data-cy="category-icon_grid-view"
            class="navbar__view-icon"
            :color="isCategoryGridView ? 'var(--c-primary)' : 'black'"
            icon="tiles"
            size="12px"
            role="button"
            aria-label="Change to grid view"
            :aria-pressed="isCategoryGridView"
            v-on="isCategoryGridView ? {}: {click: toggleCategoryGridView}"
          />
          <SfIcon
            data-cy="category-icon_list-view"
            class="navbar__view-icon"
            :color="!isCategoryGridView ? 'var(--c-primary)' : 'black'"
            icon="list"
            size="12px"
            role="button"
            aria-label="Change to list view"
            :aria-pressed="!isCategoryGridView"
            v-on="!isCategoryGridView ? {}: {click: toggleCategoryGridView}"
          />
        </div>
      </div>
    </div> -->
    <div class="main section">
      <!-- Category sidebar here -->
      <SfLoader :class="{ loading }" :loading="loading">
        <div v-if="!loading" class="products">
          <transition-group
            v-if="isCategoryGridView"
            appear
            name="products__slide"
            tag="div"
            class="products__grid"
          >
            <SfProductCard
              v-for="(product, i) in products"
              :key="productGetters.getId(product)"
              v-e2e="'category-product-card'"
              :style="{ '--index': i }"
              :title="productGetters.getName(product)"
              :regular-price="
                $n(productGetters.getPrice(product).regular, 'currency')
              "
              :is-added-to-cart="isInCart({ product, currentCart })"
              :link="
                localePath(
                  `/p/${productGetters
                    .getId(product)
                    .toString('ascii')
                    .split('/')
                    .pop()}/${productGetters.getSlug(product)}`
                )
              "
              :image="productGetters.getCoverImage(product)"
              class="products__product-card"
              @click:add-to-cart="
                handleAddToCart({ product, quantity: 1, currentCart })
              "
            >
              <template #badge>
                <div
                  :class="[
                    'products__badge',
                    [
                      product.totalInventory > 0
                        ? 'products__badge-hide'
                        : null,
                    ],
                  ]"
                >
                  <div class="products__badge-status">
                    {{ showBadge(product) }}
                  </div>
                </div>
              </template>

              <!-- <template #image="imageSlotProps">
                <SfButton
                  :link="imageSlotProps.link"
                  aria-label="Go To Product"
                  class="sf-button--pure sf-product-card__link"
                  data-testid="product-link"
                  v-on="$listeners"
                >
                  <template v-if="Array.isArray(imageSlotProps.image)">
                    <nuxt-img
                      v-for="(picture, key) in imageSlotProps.image.slice(0, 2)"
                      :key="key"
                      :alt="imageSlotProps.title"
                      :height="imageSlotProps.imageHeight"
                      :src="picture"
                      :width="imageSlotProps.imageWidth"
                      class="sf-product-card__picture"
                    />
                  </template>
                  <nuxt-img
                    v-else
                    :alt="imageSlotProps.title"
                    :height="imageSlotProps.imageHeight"
                    :src="imageSlotProps.image"
                    :width="imageSlotProps.imageWidth"
                    class="sf-product-card__image lol"
                  />
                </SfButton>
              </template> -->
            </SfProductCard>

            <!-- :add-to-cart-disabled="!productGetters.getStockStatus(product)" -->
            <!-- :max-rating="5" -->
            <!-- :score-rating="productGetters.getAverageRating(product)" -->
            <!-- :show-add-to-cart-button="false" -->

            <!-- :image-width="$device.isDesktopOrTablet ? 212 : 154" -->
            <!-- :image-height="$device.isDesktopOrTablet ? 320 : 232" -->
            <!--               :is-on-wishlist="false" -->
          </transition-group>
          <!-- <transition-group
            v-else
            appear
            name="products__slide"
            tag="div"
            class="products__list"
          >
            <SfProductCardHorizontal
              v-for="(product, i) in products"
              :key="productGetters.getId(product)"
              data-cy="category-product-cart_wishlist"
              :style="{ '--index': i }"
              :title="productGetters.getName(product)"
              :description="productGetters.getDescription(product)"
              :image="productGetters.getCoverImage(product)"
              :image-width="$device.isDesktopOrTablet ? 85 : 140"
              :image-height="$device.isDesktopOrTablet ? 128 : 212"
              :regular-price="
                $n(productGetters.getPrice(product).regular, 'currency')
              "
              :special-price="
                productGetters.getPrice(product).special &&
                $n(productGetters.getPrice(product).special, 'currency')
              "
              :add-to-cart-disabled="!productGetters.getStockStatus(product)"
              :max-rating="5"
              :score-rating="3"
              :is-on-wishlist="false"
              class="products__product-card-horizontal"
              :link="
                localePath(
                  `/p/${productGetters.getId(product)}/${productGetters.getSlug(
                    product
                  )}`
                )
              "
              @click:add-to-cart="
                handleAddToCart({ product, quantity: 1, currentCart })
              "
              ><template #image="imageSlotProps">
                <SfLink
                  :link="imageSlotProps.link"
                  class="sf-product-card-horizontal__link sf-product-card-horizontal__link--image"
                >
                  <template v-if="Array.isArray(imageSlotProps.image)">
                    <SfImage
                      v-for="(picture, key) in imageSlotProps.image.slice(0, 2)"
                      :key="key"
                      image-tag="nuxt-img"
                      :src="picture"
                      :alt="imageSlotProps.title"
                      :width="imageSlotProps.imageWidth"
                      :height="imageSlotProps.imageHeight"
                      class="sf-product-card-horizontal__picture"
                    />
                  </template>
                  <SfImage
                    v-else
                    image-tag="nuxt-img"
                    :src="imageSlotProps.image"
                    :alt="imageSlotProps.title"
                    :width="imageSlotProps.imageWidth"
                    :height="imageSlotProps.imageHeight"
                    class="sf-product-card-horizontal__image"
                  />
                </SfLink>
              </template>
              <template #configuration>
                <SfProperty
                  class="desktop-only"
                  name="Size"
                  value="XS"
                  style="margin: 0 0 1rem 0"
                />
                <SfProperty class="desktop-only" name="Color" value="white" />
              </template>
              <template #add-to-cart>
                <SfAddToCart
                  v-model="productsQuantity[product.id]"
                  :disabled="!productGetters.getStockStatus(product)"
                  class="sf-product-card-horizontal__add-to-cart desktop-only"
                  @click="
                    addItemToCart({
                      product,
                      quantity: Number(
                        productsQuantity[productData.getId(product)] || 1
                      ),
                    })
                  "
                />
              </template>
            </SfProductCardHorizontal>
          </transition-group> -->
          <!-- <SfPagination
              v-if="!loading"
              v-show="pagination.totalPages > 1"
              data-cy="category-pagination"
              class="products__pagination desktop-only"
              :current="pagination.currentPage"
              :total="pagination.totalPages"
              :visible="5"
            />
            <div
              v-show="pagination.totalPages > 1"
              class="products__show-on-page"
            >
              <span class="products__show-on-page__label">Show on page:</span>
              <SfSelect
                :value="pagination.itemsPerPage.toString()"
                class="products__items-per-page"
                @input="th.changeItemsPerPage"
              >
                <SfSelectOption
                  v-for="option in pagination.pageOptions"
                  :key="option"
                  :value="option"
                  class="products__items-per-page__option"
                >
                  {{ option }}
                </SfSelectOption>
              </SfSelect>
            </div> -->
        </div>
      </SfLoader>
    </div>
    <!-- <SfSidebar
      :visible="isFilterSidebarOpen"
      title="Filters"
      class="sidebar-filters"
      @close="toggleFilterSidebar"
    >
      <div class="filters desktop-only">
        <div v-for="(facet, i) in facets" :key="i">
          <SfHeading
            :key="`filter-title-${facet.id}`"
            :level="4"
            :title="facet.label"
            class="filters__title sf-heading--left"
          />
          <div
            v-if="isFacetColor(facet)"
            :key="`${facet.id}-colors`"
            class="filters__colors"
          >
            <SfColor
              v-for="option in facet.options"
              :key="`${facet.id}-${option.value}`"
              :data-cy="`category-filter_color_${option.value}`"
              :color="option.value"
              :selected="isFilterSelected(facet, option)"
              class="filters__color"
              @click="() => selectFilter(facet, option)"
            />
          </div>
          <div v-else>
            <SfFilter
              v-for="option in facet.options"
              :key="`${facet.id}-${option.value}`"
              :data-cy="`category-filter_${facet.id}_${option.value}`"
              :label="option.id + `${option.count ? ` (${option.count})` : ''}`"
              :selected="isFilterSelected(facet, option)"
              class="filters__item"
              @change="() => selectFilter(facet, option)"
            />
          </div>
        </div>
      </div>
      <SfAccordion class="filters smartphone-only">
        <div v-for="(facet, i) in facets" :key="i">
          <SfAccordionItem
            :key="`filter-title-${facet.id}`"
            :header="facet.label"
            class="filters__accordion-item"
          >
            <SfFilter
              v-for="option in facet.options"
              :key="`${facet.id}-${option.id}`"
              :label="option.id"
              :selected="isFilterSelected(facet, option)"
              class="filters__item"
              @change="() => selectFilter(facet, option)"
            />
          </SfAccordionItem>
        </div>
      </SfAccordion>
      <template #content-bottom>
        <div class="filters__buttons">
          <SfButton class="sf-button--full-width" @click="applyFilters"
            >Done</SfButton
          >
          <SfButton
            class="sf-button--full-width filters__button-clear"
            @click="clearFilters"
            >Clear all</SfButton
          >
        </div>
      </template>
    </SfSidebar> -->
  </div>
</template>

<script type="module">
import {
  SfButton,
  SfIcon,
  SfHeading,
  SfLoader,
  SfImage,
  // SfSidebar,
  // SfFilter,
  // // SfProductCard,
  // SfProductCardHorizontal,
  // SfPagination,
  // SfAccordion,
  // SfSelect,
  // SfBreadcrumbs,
  // SfColor,
  // SfProperty,
  // SfAddToCart,
  // SfLink,
} from '@storefront-ui/vue';
import { computed, onMounted, ref } from '@nuxtjs/composition-api';
import {
  useCart,
  productGetters,
  useFacet,
  facetGetters,
} from '@vue-storefront/shopify';
import { useUiHelpers, useUiState, useUiNotification } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import SfProductCard from '~/components/SfProductCard/SfProductCard.vue';

export default {
  components: {
    SfButton,
    SfIcon,
    SfHeading,
    SfImage,
    SfProductCard,
    SfLoader,
    // SfSidebar,
    // SfFilter,
    // SfProductCardHorizontal,
    // SfPagination,
    // SfAccordion,
    // SfSelect,
    // SfBreadcrumbs,
    // SfColor,
    // SfProperty,
    // SfAddToCart,
    // SfLink,
  },
  transition: 'fade',
  mounted() {
    console.error("test", this.products);
    this.$store.commit('products/setProducts', this.products);
  },
  setup(_, context) {
    const th = useUiHelpers();
    const uiState = useUiState();
    const { addItem: addItemToCart, isInCart, cart: currentCart } = useCart();
    const { send: sendNotification } = useUiNotification();
    const { result, search, loading } = useFacet();
    const products = computed(() => facetGetters.getProducts(result.value));
    const sortBy = computed(() => facetGetters.getSortOptions(result.value));
    const facets = computed(() =>
      facetGetters.getGrouped(result.value, ['color', 'size'])
    );
    const pagination = computed(() => facetGetters.getPagination(result.value));
    onSSR(async () => {
      await search(th.getFacetsFromURL());
    });
    const productsQuantity = ref({});

    const { isFacetColor } = useUiHelpers();
    const { toggleCategoryGridView } = useUiState();

    onMounted(() => {
      context.root.$scrollTo(context.root.$el, 2000);
    });

    return {
      ...uiState,
      productsQuantity,
      th,
      products,
      loading,
      productGetters,
      pagination,
      sortBy,
      facets,
      currentCart,
      sendNotification,
      addItemToCart,
      isInCart,
      isFacetColor,
      toggleCategoryGridView,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      // breadcrumbs: [
      //   {
      //     text: 'Home',
      //     link: '/',
      //   },
      //   {
      //     text: this.removeSpaceFromText(this.$route.params.slug_1),
      //     link: '#',
      //   },
      // ],
    };
  },
  computed: {},
  methods: {
    showBadge(productStatus) {
      return productStatus.totalInventory > 0 ? null : 'Preorder';
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleAddToCart(productObj) {
      this.addItemToCart(productObj).then(() => {
        this.sendNotification({
          key: 'added_to_cart',
          message: 'Product has been successfully added to cart !',
          type: 'success',
          title: 'Product added!',
          icon: 'check',
        });
      });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    removeSpaceFromText(str) {
      let i;
      const frags = (str ?? '').split('-');
      for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }
      return frags.join(' ');
    },
  },
};
</script>

<style lang="scss" scoped>
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
  display: flex;
}

.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__product-card {
    --product-card-title-font-weight: var(--font-weight--medium);
    --product-card-title-margin: var(--spacer-xs) 0 0 0;
    --product-card-max-width: none;
    // flex: 1 1 50%;
    @include for-desktop {
      --product-card-title-font-weight: var(--font-weight--normal);
      --product-card-add-button-bottom: var(--spacer-base);
      --product-card-title-margin: var(--spacer-sm) 0 0 0;
      --product-card-max-width: none;
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  &__grid {
    margin: 30px auto;
    width: 100%;
    display: grid;
    /* Define Auto Row size */
    // grid-auto-rows: 100px;
    /*Define our columns */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 32px;
  }
  @include for-desktop {
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: var(--font-family--secondary);
      font-size: var(--font-size--sm);
    }
  }
  &__badge {
    position: absolute;
    left: 0px;
    top: 0px;

    &-hide {
      display: none;
    }

    &-status {
      width: 140px;
      height: 111px;
      display: flex;
      background-color: #66ff00;
      align-items: center;
      justify-content: center;
    }
  }
}
.loading {
  margin: var(--spacer-3xl) auto;
  @include for-desktop {
    margin-top: 6.25rem;
  }
}
</style>
