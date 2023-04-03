<template>
    <div>
      <transition name="sf-fade" mode="out-in">
        <div>
          <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
            <form class="form" @submit.prevent="handleSubscribe">
              <ValidationProvider v-slot="{ errors }" rules="required|email">
                <SfInput
                  v-model="form.useremail"
                  v-e2e="'subscribe-email'"
                  :valid="!errors[0]"
                  :error-message="errors[0]"
                  name="email"
                  label="Your email"
                  class="form__element subscribe-email"
                />
              </ValidationProvider>
              <SfButton
                v-e2e="'subscribe-submit'"
                type="submit"
                class="sf-button--full-width form__button"

              >
                <div>{{ $t('Subscribe') }}</div>
              </SfButton>
            </form>
          </ValidationObserver>
        </div>
      </transition>
    </div>
  </template>
  <script>
  import { ref, reactive } from '@nuxtjs/composition-api';
  import { SfModal, SfInput, SfButton, SfCheckbox, SfLoader, SfBar } from '@storefront-ui/vue';
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import { required, email } from 'vee-validate/dist/rules';
  import { useUiHelpers, useUiState } from '~/composables';
  import { onSSR } from "@vue-storefront/core";
  import axios from 'axios'
  
  extend('email', {
    ...email,
    message: "Please include an '@' in the email address"
  });
  
  extend('required', {
    ...required,
    message: 'This field is required'
  });
  
  export default {
    name: 'NewsSubscribe',
    components: {
      SfModal,
      SfInput,
      SfButton,
      SfCheckbox,
      SfLoader,
      ValidationProvider,
      ValidationObserver,
      SfBar
    },
    setup() {
        const { isNewsletterModalOpen, toggleNewsletterModal } = useUiState();
        const subscribed = false;
        const form = ref({});
        const userEmail = ref('');      
        const error = reactive({
            login: null,
            register: null
        });

        const handleSubscribe = () => {
          axios({
            method: 'post',
            url: `https://us1.api.mailchimp.com/3.0/lists/9d49020372/members`,
            data: {
              email_address: form.value.useremail,
              status: 'subscribed',
            },
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${Buffer.from(`anystring:fbf262e3e027e014a995ca4ceb5eecfc-us12`).toString('base64')}`,
            },
          })
            .then(response => {
              console.log(`Successfully subscribed ${form.value.useremail} to the newsletter.`)
            })
            .catch(error => {
              console.error(error)
            })
            // console.log(form.value.useremail);
        };

        onSSR(async () => {
          // await loading();
        });

        return {
            form,
            error,
            handleSubscribe,
            userEmail,
            toggleNewsletterModal,
            subscribed
        };
    },
    methods: {
      debugAlert(logValue) {
        console.error("sdfsdfsdf : ", logValue);
        alert(logValue);
      }
    },
  };
  </script>

<style scoped lang="scss">
.subscribe-email {
    & input {
        color: white;
    }    
}
</style>
