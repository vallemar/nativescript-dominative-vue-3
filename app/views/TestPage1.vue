<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label style="font-size: 50px;">Test</Label>
      <Label style="font-size: 50px;">{{ store.state.count }}</Label>
    </StackLayout>

  </Page>
</template>
<script lang="ts" setup>
import {useRouter} from "nativescript-vue-router-extended";
import { useCommonStore } from "~/plugins/stores/Common.store";
import { useStore } from 'vuex'

const commonStore = useCommonStore()
commonStore.countTest = 85;
const store = useStore()
store.state.count = 55
</script>
