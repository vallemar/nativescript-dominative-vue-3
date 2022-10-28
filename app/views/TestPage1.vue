<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label> Test </Label>
      <Label> {{ store.state.count }} </Label>
    </StackLayout>

  </Page>
</template>
<script lang="ts" setup>
import {useRouter} from "nativescript-vue-router-extended";
import {useCommonStore} from "~/plugins/stores/Common.store";
const commonStore = useCommonStore()
commonStore.countTest = 85;

import { useStore } from 'vuex'
const store = useStore()
store.state.count = 55

const router = useRouter()

setTimeout(() => {
  router.push("/parallax")
  setTimeout(() => {
    //this.$routeBack();
  }, 2000);

}, 1000)




</script>
