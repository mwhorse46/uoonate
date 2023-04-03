import { reactive, computed } from '@nuxtjs/composition-api';

const state = reactive({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isLoginModalOpen: false,
  isCategoryGridView: true,
  isFilterSidebarOpen: false,
  isNavigationSidebarOpen: false,
  isMobileMenuOpen: false,
  articlesPerPage: '5',
  isNewsletterModalOpen: false
});

const useUiState = () => {
  const isMobileMenuOpen = computed(() => state.isMobileMenuOpen);
  const toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  };

  const isCartSidebarOpen = computed(() => state.isCartSidebarOpen);
  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const isWishlistSidebarOpen = computed(() => state.isWishlistSidebarOpen);
  const toggleWishlistSidebar = () => {
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };

  const isNavigationSidebarOpen = computed(() => state.isNavigationSidebarOpen);
  const toggleNavigationSidebar = () => {
    state.isNavigationSidebarOpen = !state.isNavigationSidebarOpen;
  };

  const isLoginModalOpen = computed(() => state.isLoginModalOpen);
  const toggleLoginModal = () => {
    state.isLoginModalOpen = !state.isLoginModalOpen;
  };

  const isCategoryGridView = computed(() => state.isCategoryGridView);
  const toggleCategoryGridView = () => {
    state.isCategoryGridView = !state.isCategoryGridView;
  };

  const isFilterSidebarOpen = computed(() => state.isFilterSidebarOpen);
  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };

  const articlesPerPage = computed(() => state.articlesPerPage)
  const setArticlesPerPage = (perPage: string) => {
    state.articlesPerPage = perPage
  }

  const isNewsletterModalOpen = computed(() => state.isNewsletterModalOpen);
  const toggleNewsletterModal = () => {
    state.isNewsletterModalOpen = !state.isNewsletterModalOpen;
  };

  return {
    isCartSidebarOpen,
    isWishlistSidebarOpen,
    isLoginModalOpen,
    isCategoryGridView,
    isFilterSidebarOpen,
    isNavigationSidebarOpen,
    isMobileMenuOpen,
    toggleMobileMenu,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleLoginModal,
    toggleCategoryGridView,
    toggleFilterSidebar,
    toggleNavigationSidebar,
    articlesPerPage,
    setArticlesPerPage,
    toggleNewsletterModal,
    isNewsletterModalOpen
  };
};

export default useUiState;
