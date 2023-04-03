<template>
  <div>
    <h1>Terms</h1>
    <div v-html="content.body" />
    <AppFooter />
  </div>
</template>
  
<script>
  import { useContent } from '@vue-storefront/shopify';
  import { onSSR } from '@vue-storefront/core';
  import AppFooter from '~/components/AppFooter.vue';

  export default {
    name: 'Terms',
    components: {
      AppFooter,
    },
    transition: 'fade',
    setup() {
      const {
        loading: contextsLoading,
        content,
        search
      } = useContent();

      onSSR(async () => {
        await search({ handle: 'terms', contentType: 'page' }); // mhch
      });

      return {
        content,
        contextsLoading
      };
    }
  };
</script>
  