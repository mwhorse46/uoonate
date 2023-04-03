<template>
  <div>
    <h1>Impact</h1>
    <div v-html="content.body" />
    <AppFooter />
  </div>
</template>
  
<script>
  import { useContent } from '@vue-storefront/shopify';
  import { onSSR } from '@vue-storefront/core';
  import AppFooter from '~/components/AppFooter.vue';

  export default {
    name: 'ContactUs',
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
        await search({ handle: 'impact', contentType: 'page' });
      });

      return {
        content,
        contextsLoading
      };
    }
  };
</script>
  