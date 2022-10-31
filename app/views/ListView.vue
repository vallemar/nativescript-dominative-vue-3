<script lang="ts" setup>
import {ref} from 'vue';
import ListWrapper from '@/components/ListWrapper.vue';

const numberItems = 1000000;
const data = []
for (let i = 0; i < numberItems; i++) {
  data.push({id: i})
}

const items = ref(data);
const count = ref(0);

</script>

<template>
  <Page class="gradient" actionBarHidden="true">
    <StackLayout>
      <Label class="px-4 pt-6 text-2xl text-white font-bold">ListView with {{ items.length }} items ⚡</Label>
      <StackLayout class="px-4 mt-8">
        <Button class="primary text-base" @tap="count++">Tap me! {{ count }} | I am ref(😊)</Button>
        <Label class="my-2 text-center text-white text-lg">Reactive update data in native list</Label>
        <!--        <Button height="35" width="auto" class="mr-1 text-sm" col="0" @tap="items.push({ id: 0 })">➕ Add
                  item!
                </Button>-->
      </StackLayout>
      <v-list
          class="mt-2 bg-transparent"
          :items="items"
          itemTemplateSelector="$index % 2 ? 'odd' : 'even'"
          :wrapper="ListWrapper"
          height="100%"
      >
        <template #odd="{ item, index }">
          <Label row="0" class="text-lg">Template Odd</Label>
          <Label row="1" class=" mt-2" textWrap="true">Index: {{ index }}, count: {{
              count
            }}</Label>
          <Image stretch="aspectFill" row="0" horizontalAlignment="right" rowSpan="2"
                 src="~/assets/images/50-odd.jpg"
                 height="50" width="50" class="rounded-full"></Image>
        </template>
        <template #even="{ item, index }">
          <Label row="0" horizontalAlignment="right" class="text-lg">Template Even</Label>
          <Label row="1" horizontalAlignment="right" class=" mt-2" textWrap="true">Index: {{ index }}, count: {{
              count
            }}</Label>
          <Image stretch="aspectFill" row="0" horizontalAlignment="left" rowSpan="2"
                 src="~/assets/images/50-even.jpg"
                 height="50" width="50" class="rounded-full"></Image>
        </template>
      </v-list>
    </StackLayout>
  </Page>
</template>
