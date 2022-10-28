<template>
    <Page>
      <Label>
        Page 5
      </Label>
    </Page>
  </template>
 <script setup>
 import {useRouter} from "nativescript-vue-router-extended";

 console.log("This Screen should be displayed!")

 const router = useRouter()
 setTimeout(() =>{
   console.log()
   router.push("/example")
 },1000)
 </script>