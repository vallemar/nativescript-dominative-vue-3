import {defineStore} from "pinia";
import {ref} from "vue";

export const useCommonStore = defineStore('common', () => {
    const nameApp = ref('Vue 3')
    const countTest = ref(0)

    return {nameApp, countTest}
})