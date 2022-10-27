<script setup>
import {ref} from 'vue';
import {ObservableArray} from '@nativescript/core';
import {useCommonStore} from "~/plugins/stores/Common.store";

const count = ref(0);
const items = ref(new ObservableArray([]));
const commonStore = useCommonStore()
</script>

<template>
  <Page>
    <ActionBar :title="`Hello, ${commonStore.nameApp}!`"></ActionBar>
    <GridLayout class="p-4" rows="auto, auto, auto, auto, *">
      <Label row="0">Hello: {{ commonStore.nameApp }} from Pinia Store</Label>
      <TextField row="1" v-model="commonStore.nameApp"/>
      <Button row="2" class="-primary" @tap="count++">Tap me! {{ count }}</Button>
      <GridLayout row="3" height="60" columns="*, *">
        <Button col="0" @tap="items.push({ idx: items.length, name })"
        >Add item!
        </Button
        >
        <Button col="1" @tap="items.pop()">Remove item!</Button>
      </GridLayout>
      <v-list row="4" :items="items" itemTemplateSelector="$index % 2 ? 'odd' : 'even'"
              :capture="[commonStore.nameApp]">
        <template #odd="{ item, index }">
          <GridLayout class="py-2" columns="*, auto" rows="auto, auto">
            <Label col="0" row="0">Odd: Index: {{ index }}, length when added: {{ item.idx }}</Label>
            <Label col="0" row="1"> {{ commonStore.nameApp }}</Label>
            <Button rowSpan="2" col="1"  @tap="items.splice(index, 1)">Remove</Button>
          </GridLayout>
        </template>
        <template #even="{ item, index }">
          <GridLayout class="py-2" columns="*, auto" rows="auto, auto">
            <Label col="0" row="0">Even: Index: {{ index }}, length when added: {{ item.idx }}</Label>
            <Label col="0" row="1"> {{ commonStore.nameApp }}</Label>
            <Button rowSpan="2" col="1" @tap="items.splice(index, 1)">Remove</Button>
          </GridLayout>
        </template>
      </v-list>
    </GridLayout>
  </Page>

</template>
