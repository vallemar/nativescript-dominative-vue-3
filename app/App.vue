<template>
  <RootLayout>
    <Page>
      <StackLayout>
        <Label> Page 1 </Label>
      </StackLayout>
    </Page>
  </RootLayout>
</template>

<script setup lang="ts">
import {getRootLayout, View} from "@nativescript/core";
import {createApp} from "@dominative/vue";
import Page from "./views/Page.vue"


setTimeout(() => {

  const app = createApp(Page)
  const view: View = app.$render()

  getRootLayout()
      .open(view, {
        animation: {
          enterFrom: {
            opacity: 0,
            translateY: 500,
            duration: 500
          },
          exitTo: {
            opacity: 0,
            duration: 300
          }
        }
      })
      .catch(ex => {
        console.log("ERRORRR")
        console.error(ex)
      })
}, 2000);
</script>







