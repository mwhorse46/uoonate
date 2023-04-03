<template>
<div>
  <h1>Contact Us</h1>
  <div v-html="content.body" />
</div>
</template>

<script>
import { useContent } from '@vue-storefront/shopify';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'ContactUs',
  transition: 'fade',
  setup() {
    const {
      loading: contextsLoading,
      content,
      search
    } = useContent('pages');

    onSSR(async () => {
      await search({ handle: 'contact-us', ContentType: 'page' });
    });

    return {
      content,
      contextsLoading
    };
  }
};
</script>
