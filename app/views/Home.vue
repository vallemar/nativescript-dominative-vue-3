<template>
  <Page>
    <Label style="font-size: 50px"> Home </Label>
  </Page>
</template>
<script setup>
import { useRouter } from "nativescript-vue-router-extended";
console.log("This Screen should be displayed!");
const router = useRouter();

setTimeout(() => {
  router.push("/test2", {
    frame: "sidebar",
  });
}, 5000);
</script>
