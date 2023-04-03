<template>
  <div class="d-flex footer-parent align-items-center">
    <SfFooter :column="2" multiple class="footer">
      <SfFooterColumn :title="this.$t('Title 1')">
        <SfList>
          <SfListItem v-for="(item, a) in title1" :key="a">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn :title="this.$t('Title 2')">
        <SfList>
          <SfListItem v-for="(item, a) in title2" :key="a">
            <SfMenuItem :label="$t(item)" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn class="py-0 hidden-btn">
        <SfList>
          <SfListItem v-for="(item, a) in copyRight" :key="a">
            <SfMenuItem :label="$t(item)" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn class="py-0 hidden-btn">
        <SfList>
          <SfListItem v-for="(item, a) in copyRightLinks" :key="a">
            <SfMenuItem :label="item.title" :link="localePath(item.link)" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>      
    </SfFooter>
    <div>
      <NewsletterForm class="news-part"/>
    </div>
  </div>  
</template>
<script>
import {
  SfFooter, SfList, SfImage, SfMenuItem,
} from '@storefront-ui/vue';
import NewsletterForm from './NewsletterForm.vue';
export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
    NewsletterForm
  },
  data() {
    return {
      copyRight: [this.$t("© Uoona. All Rights Reserved.")],
      copyRightLinks: [
        {title: this.$t("About"), link: "/About"}, 
        {title: this.$t("Terms"), link: "/Termsandconditions"}
      ],
      title1: [this.$t("Link 1"), this.$t("Link 2")],
      title2: [this.$t("Link 3"), this.$t("Link 4")],
    };
  },
};
</script>

<style scoped lang="scss">
.footer-parent {
  padding: 0px 5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #1d1f22;
}
.sf-footer {
  padding: 0px !important;
}
.footer {  
  width: 70%;
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr) max-content;
    padding: 4rem var(--spacer-sm) 0;
    grid-row-gap: 24px;
  }
  .sf-footer-column {
    margin: 0px;
    margin: auto;
  }
  .footer__col {
    margin: 0;
  }
  &-col-title {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.38em;
    line-height: 20px;
    display: block;
    color: #999999;
    margin-bottom: 16px;
  }
  &-links {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &-link {
    &:hover {
    }
  }
}

.news-part {
}
</style>
