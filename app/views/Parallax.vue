<script setup lang="ts">
import {onMounted } from 'vue';
import {
  AccelerometerData,
  startAccelerometerUpdates,
} from '@triniwiz/nativescript-accelerometer';
import { isIOS } from '@nativescript/core';
import ImageParalax from '@/components/ImageParalax.vue';
import Nav from '@/components/Nav.vue';
import {useAccelerometerStore} from "@/plugins/stores/Accelerometer.store";
import {useCommonStore} from "~/plugins/stores/Common.store";

const accelerometerStore = useAccelerometerStore()

const dataImages = [
  {
    bg: 'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/rio-bg.jpg?raw=true',
    front:
      'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/rio.png?raw=true',
  },
  {
    bg: 'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/france-bg.jpg?raw=true',
    front:
      'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/france.png?raw=true',
  },
  {
    bg: 'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/iceland-bg.jpg?raw=true',
    front:
      'https://github.com/lklima/rn-parallax-cards/blob/master/src/assets/images/iceland.png?raw=true',
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
const commonStore = useCommonStore()
import { useStore } from 'vuex'
const store = useStore()


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
              <ImageParalax
                v-if="dataImage"
                :dataImages="dataImage"
              ></ImageParalax>
            </StackLayout>
          </TabViewItem>
        </TabView>
      </GridLayout>
      <Nav row="2" col="0"></Nav>
    </GridLayout>
  </Page>
</template>
