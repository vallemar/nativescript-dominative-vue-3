<template>
  <Page>
    <Label> Page 1 </Label>
  </Page>
</template>

<script lang="ts" setup>

import {useRouter} from "nativescript-vue-router-extended"


const router = useRouter()
setTimeout(() => {
  router.push("/page", {transition: {name: "flip "}})

  setTimeout(() => {
    router.back()
  }, 5000);

}, 2000);

</script>