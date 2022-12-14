<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {isAndroid, ObservableArray, View} from '@nativescript/core';
import ListWrapper from '@/components/ListWrapper.vue';
import {useCommonStore} from "~/plugins/stores/pinia/Common.store";
import {useRouter} from "router-vue-native";


const count = ref(0);
const items = ref(new ObservableArray([]));
const commonStore = useCommonStore()

const router = useRouter();
const navigateParallax = () => {
  router.push("/parallax", {
    transition: {
      name: "fade"
    }
  })
}
const defaultTransition = {
  transition: {
    name: "slideLeft"
  }
}
const navigateRootLayout = () => {
  router.push("/root_layout", defaultTransition)
}
const navigateListView = () => {
  router.push("/list", defaultTransition)
}
const navigateTabs = () => {
  router.push("/tabs", defaultTransition)
}
</script>

<template>
  <Page class="gradient" actionBarHidden="true">
    <StackLayout>
      <Label class="px-4 pt-6 text-2xl text-white font-bold">{ N } Hello Vue 3 👋</Label>

      <StackLayout class="p-4 mt-2">

        <FlexboxLayout class="text-lg text-white" flexWrap="wrap">
          <Label>Hello</Label>
          <Label v-if="commonStore.nameApp" class="ml-1 bg-white rounded-full px-1 color-accent-primary">{{ commonStore.nameApp }}</Label>
          <Label>, </Label>
          <Label>I am a string updated by Pinia 🍍 store!</Label>
        </FlexboxLayout>

        <TextField class="input-text android:mt-1 ios:my-4 ios:border-b-1 ios:border-white" v-model="commonStore.nameApp"/>
        <Button class="primary mt-4" @tap="count++">Tap me! {{ count }} | I am ref() 😊</Button>

        <Button class="primary mt-4 text-base" @tap="navigateParallax" height="40">Navigate To Parallax</Button>
        <Button class="primary mt-4 text-base" @tap="navigateRootLayout" height="40">Navigate To RootLayout</Button>
        <Button class="primary mt-4 text-base" @tap="navigateListView" height="40">Navigate To ListView</Button>
        <Button class="primary mt-4 text-base" @tap="navigateTabs" height="40">Navigate To Tabs</Button>


        <Label class="mt-8 text-xl text-center animate-color p-3 rounded-full text-white">⚡ Native list with recycled
          items ⚡</Label>
        <GridLayout class="mt-2 px-2" height="50" columns="*, *">
          <Button height="35" class="mr-1 text-sm" col="0" @tap="items.push({ name: commonStore.nameApp })">➕ Add
            item!
          </Button>
          <Button height="35" class="ml-1 text-sm" col="1" @tap="items.pop()">➖ Remove item!</Button>
        </GridLayout>

        <v-list
            class="mt-2 bg-transparent"
            :items="items"
            itemTemplateSelector="$index % 2 ? 'odd' : 'even'"
            :wrapper="ListWrapper"
            height="100%"
            :capture="[count]"
        >
          <template #odd="{ item, index }">
            <Label row="0" class="text-lg">Template Odd</Label>
            <Label row="1" class=" mt-2" textWrap="true">Index: {{ index }}, dataItem: {{ item.name }}, count: {{
                count
              }}</Label>
            <Image stretch="aspectFill" row="0" horizontalAlignment="right" rowSpan="2"
                   src="~/assets/images/50-odd.jpg"
                   height="50" width="50" class="rounded-full"></Image>
          </template>
          <template #even="{ item, index }">
            <Label row="0" horizontalAlignment="right" class="text-lg">Template Even</Label>
            <Label row="1" horizontalAlignment="right" class=" mt-2" textWrap="true">Index: {{ index }}, dataItem:
              {{ item.name }}, count: {{
                count
              }}</Label>
            <Image stretch="aspectFill" row="0" horizontalAlignment="left" rowSpan="2"
                   src="~/assets/images/50-even.jpg"
                   height="50" width="50" class="rounded-full"></Image>
          </template>
        </v-list>

      </StackLayout>
    </StackLayout>
  </Page>
</template>

<style scoped>

.animate-color {
  animation: colorchange 3s infinite;
}

@keyframes colorchange {
  0% {
    background-color: #E9489C;
  }
  50% {
    background-color: #4F46E5;
  }
  85% {
    background-color: #55688A;
  }
  100% {
    background-color: #E9489C;
  }
}


</style>
