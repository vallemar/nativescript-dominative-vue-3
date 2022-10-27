import {defineStore} from "pinia";
import {ref} from "vue";
import {AccelerometerData} from "@triniwiz/nativescript-accelerometer";

export const useAccelerometerStore = defineStore('accelerometer', () => {
    const accelerometer = ref<AccelerometerData>()

    return {accelerometer}
})