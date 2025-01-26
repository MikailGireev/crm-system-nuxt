<script setup lang="ts">
import { useDealSlideStore } from '@/store/deal-slide.store';
const store = ref();

onMounted(() => {
  store.value = useDealSlideStore();
});

const isLocalOpen = computed({
  get: () => store.value?.isOpen,
  set: value => {
    store.value.isOpen = value;
  },
});
</script>

<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'diver-y divide-border' }">
        <template #header> <KanbanSlideoverTop /> </template>
        <KanbanSlideoverComments />
      </UCard>
    </USlideover>
  </div>
</template>
