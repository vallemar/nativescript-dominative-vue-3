<script lang="ts" setup>
import { PropType } from 'vue';
import {useAccelerometerStore} from "@/plugins/stores/Accelerometer.store";

export type DataImages = {
  bg: string;
  front: string;
};

const props = defineProps({
  dataImages: Object as PropType<DataImages>,
});

const accelerometerStore = useAccelerometerStore()
</script>

<template>
  <GridLayout class="parallax radius" v-if="accelerometerStore.accelerometer">
    <Image
      class="radius"
      stretch="aspectFill"
      :translateX="accelerometerStore.accelerometer.x * 20"
      :src="dataImages.bg"
    >
    </Image>
    <Image
      class="radius"
      stretch="aspectFill"
      :translateX="accelerometerStore.accelerometer.x * -8"
      :src="dataImages.front"
    >
    </Image>
    <GridLayout class="mask radius"></GridLayout>
    <GridLayout class="mask"></GridLayout>
  </GridLayout>
</template>

<style>
.parallax {
  margin-bottom: 40;
}

.radius {
  border-radius: 40;
}
.mask {
  border-width: 20;
  border-color: white;
}
.radius {
  border-radius: 40;
}
</style>
