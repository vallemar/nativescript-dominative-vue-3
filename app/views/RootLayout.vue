<script lang="ts" setup>


import {useRootLayout} from "~/use/useRootLayout";

const rootLayout = useRootLayout()

const rootLayoutExamples = [
  {img: "~/assets/images/bottomsheet.png", showMethod: rootLayout.showBottomSheet, text: "Open BottomSheet"},
  {img: "~/assets/images/modal.png", showMethod: rootLayout.showModal, text: "Open Modal"},
  {img: "~/assets/images/snackbar.png", showMethod: rootLayout.showSnackbar, text: "Open Snackbar"},
  {img: "~/assets/images/sidebar.png", showMethod: rootLayout.showSidebar, text: "Open Sidebar"},
]
</script>

<template>
  <Page class="gradient" actionBarHidden="true">
    <RootLayout>
      <ScrollView>
        <StackLayout class="p-4">
          <Label class="my-4 text-2xl text-white font-bold">RootLayout Vue 3 🪄</Label>
          <GridLayout :rows="rootLayoutExamples.map(rootLayout => ('auto')).join(', ')">
            <GridLayout rows="auto, auto" :row="index" class="rounded-xl p-4 mt-2 bg-accent-secondary"
                        v-for="(rootLayout, index) in rootLayoutExamples" :key="index">
              <Image row="0" height="100" :src="rootLayout.img"></Image>
              <Label row="1" class="mt-4 bg-white rounded-full px-4 py-2 text-center text-lg text-black"
                     @tap="rootLayout.showMethod">{{ rootLayout.text }}</Label>
            </GridLayout>
          </GridLayout>
        </StackLayout>
      </ScrollView>
    </RootLayout>
  </Page>
</template>

<style>

</style>
