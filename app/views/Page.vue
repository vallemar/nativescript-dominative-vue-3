<template>
    <Page>
      <Label>
        Page 5
      </Label>
    </Page>
  </template>
<script setup>
import { useRouter } from "nativescript-vue-router-extended";
const router = useRouter()
console.log(router.getCurrentRoute())
</script>
  