<template>
  <div>
    Terms &amp; Conditions
    <!-- Page content ? -->
    {{ content }}
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useContent } from '@vue-storefront/shopify';
import { onSSR } from '@vue-storefront/core';

export default defineComponent({
  setup() {
    const { search, content } = useContent('pageContents');

    onSSR(async () => {
      await search(
        { handle: 'TermsAndConditions', ContentType: 'page' },
        content
      );
    });

    return {
      content,
    };
  },
});
</script>

<style lang="scss"></style>
