<template>
  <component
    :is="componentName"
    :href="props?.href"
    :type="type"
    :form="form"
    class="ui-button-primary"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  type?: string;
  href?: string;
  form?: string;
  rel?: string;
  disabled?: boolean;
}>();

const componentName = computed(() => (props?.href ? 'a' : 'button'));
</script>

<style lang="scss" scoped>
.ui-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  height: 44px;
  padding: 0 15px;
  transition: 0.2s linear background-color;
  &:hover {
    background-color: rgb(70, 70, 70);
  }
  &:disabled {
    pointer-events: none;
  }
}
</style>
