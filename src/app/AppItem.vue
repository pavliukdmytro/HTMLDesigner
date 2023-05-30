<template>
  <div class="app-item">
    <div>{{ result.id }}</div>
    <div>{{ result.text }}</div>
    <button class="app-item__button" @click="$emit('remove', result.id)">remove</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface Props {
  result: {
    id: number;
    text: string;
  };
}

const props = defineProps<Props>();
const result = reactive(props.result);
</script>

<style lang="scss" scoped>
.app-item {
  display: grid;
  grid-template-columns: 150px 1fr auto;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  &__button {
    padding: 10px 20px;
  }
}
</style>
