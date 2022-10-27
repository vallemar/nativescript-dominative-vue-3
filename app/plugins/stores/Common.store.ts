import {defineStore} from "pinia";
import {ref} from "vue";

export const useCommonStore = defineStore('common', () => {
    const nameApp = ref('Vue 3')

    return {nameApp}
})