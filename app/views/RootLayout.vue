<script lang="ts" setup>
import {createNativeView} from "@dominative/vue"
import BottomSheet from "@/components/root-layout/BottomSheet.vue"
import Modal from "@/components/root-layout/Modal.vue"
import Snackbar from "@/components/root-layout/Snackbar.vue"
import Sidebar from "@/components/root-layout/Sidebar.vue"
import {CoreTypes, getRootLayout} from "@nativescript/core";

const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11);

const showBottomSheet = () => {
  const nsView = createNativeView(BottomSheet)

  getRootLayout()
      .open(nsView, {
        shadeCover: {
          color: '#282C34',
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            translateY: 500,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
          exitTo: {
            translateY: 500,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
        },
      }).catch(ex => console.error(ex))
}
const showModal = () => {
  const nsView = createNativeView(Modal)

  getRootLayout()
      .open(nsView, {
        shadeCover: {
          color: '#282C34',
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            translateY: -200,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
          exitTo: {
            translateY: -200,
            opacity: 0,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
        },
      }).catch(ex => console.error(ex))
}

const showSnackbar = () => {
  const nsView = createNativeView(Snackbar)

  getRootLayout()
      .open(nsView, {
        shadeCover: {
          color: '#282C34',
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            translateY: -300,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
          exitTo: {
            translateY: -300,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
        },
      }).catch(ex => console.error(ex))
}


const showSidebar = () => {
  const nsView = createNativeView(Sidebar)

  getRootLayout()
      .open(nsView, {
        shadeCover: {
          color: '#282C34',
          opacity: 0.7,
          tapToClose: true,
        },
        animation: {
          enterFrom: {
            translateX: -300,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
          exitTo: {
            translateX: -300,
            duration: 300,
            curve: DEFAULT_ANIMATION_CURVE,
          },
        },
      }).catch(ex => console.error(ex))
}

</script>

<template>
  <Page class="gradient" actionBarHidden="true">
    <RootLayout>
      <GridLayout rows="auto, auto, auto, auto" class="p-4">
        <Button class="mt-4" row="0" @tap="showBottomSheet">Open BottomSheet</Button>
        <Button class="mt-4" row="1" @tap="showModal">Open Modal</Button>
        <Button class="mt-4" row="2" @tap="showSnackbar">Open Snackbar</Button>
        <Button class="mt-4" row="3" @tap="showSidebar">Open Sidebar</Button>
      </GridLayout>
    </RootLayout>
  </Page>
</template>

<style>

</style>
