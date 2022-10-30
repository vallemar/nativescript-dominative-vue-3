<script setup lang="ts">
import {onMounted} from 'vue';
import {
  AccelerometerData,
  startAccelerometerUpdates,
} from '@triniwiz/nativescript-accelerometer';
import {isIOS} from '@nativescript/core';
import ImageParallax from '@/components/ImageParallax.vue';
import Nav from '@/components/Nav.vue';
import {useAccelerometerStore} from "@/plugins/stores/pinia/Accelerometer.store";

const accelerometerStore = useAccelerometerStore()

const dataImages = [
  {
    bg: '~/assets/images/rio-bg.jpg',
    front: '~/assets/images/rio.png',
  },
  {
    bg: '~/assets/images/france-bg.jpg',
    front: '~/assets/images/france.png',
  },
  {
    bg: '~/assets/images/iceland-bg.jpg',
    front: '~/assets/images/iceland.png',
  },
];


onMounted(() => {
  startAccelerometerUpdates(
      (data: AccelerometerData) => {
        accelerometerStore.accelerometer = data;
      },
      {
        sensorDelay: 'game',
      }
  );
});

const onLoadedTab = (args: any) => {
  if (isIOS) {
    args.object.ios.tabBar.hidden = true;
  } else {
    args.object.android.tabLayout.setVisibility(android.view.View.GONE);
  }
};

</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, *, 65" colums="*">
      <FlexboxLayout row="0" col="0" class="p-4 justify-between">
        <Image
            style="height: 32"
            src="https://cdn-icons-png.flaticon.com/512/2516/2516745.png"
        ></Image>
        <Image
            style="height: 32"
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
        ></Image>
      </FlexboxLayout>

      <GridLayout row="1">
        <TabView ref="tabView" @loaded="onLoadedTab">
          <TabViewItem v-for="(dataImage, i) in dataImages" :key="i">
            <StackLayout>
              <ImageParallax
                  v-if="dataImage"
                  :dataImages="dataImage"
              ></ImageParallax>
            </StackLayout>
          </TabViewItem>
        </TabView>
      </GridLayout>
      <Nav row="2" col="0"></Nav>
    </GridLayout>
  </Page>
</template>
