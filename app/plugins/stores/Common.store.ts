import {defineStore} from "pinia";
import {ref} from "vue";
import {AccelerometerData} from "@triniwiz/nativescript-accelerometer";

export const useCommonStore = defineStore('common', () => {
    const nameApp = ref('Vue 3')

    return {nameApp}
})