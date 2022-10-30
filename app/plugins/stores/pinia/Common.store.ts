import {defineStore} from "pinia";
import {ref} from "vue";

export const useCommonStore = defineStore('common', () => {
    const nameApp = ref('developer')

    return {nameApp}
})