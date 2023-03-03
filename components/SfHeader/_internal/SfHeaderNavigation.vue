<template>
  <div class="sf-header-navigation" v-on="$listeners">
    <div class="sf-header-navigation__menu">
      <slot />
    </div>
    <SfSidebar
      :persistent="true"
      class="sf-header-navigation__sidebar"
      @close="$emit('close')"
    >
      <slot />
    </SfSidebar>
  </div>
</template>
<script>
import SfSidebar from '@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar';

export default {
  name: 'SfHeaderNavigation',
  components: {
    SfSidebar,
  },
};
</script>
