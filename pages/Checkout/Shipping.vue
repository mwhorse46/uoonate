<template>
  <!--<form @submit.prevent="save({ shippingDetails: shippingForm })">
     form fields 
    <button type="submit" :disabled="loading">{{ $t("Submit") }}</button>
  </form> -->
  <div>qweqweqwewqe</div>
</template>

<script>
// import { useShipping } from "@vsf-enterprise/commercetools";
import { onSSR } from "@vue-storefront/core";

export default {
  setup() {
    const { save, loading, shipping } = useShipping();

    const shippingForm = ref(/* object for shipping details */);

    return {
      shippingForm,
      save,
    };
  },
};
</script>
