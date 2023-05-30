<template>
  <component
    :is="componentName"
    :href="props?.href"
    :type="type"
    :form="form"
    class="ui-button-secondary"
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
.ui-button-secondary {
  background-color: transparent;
  color: var(--dark-grey);
  border: 1px solid currentColor;
  height: 44px;
  padding: 0 15px;
  transition: 0.2s linear background-color;
  &:hover {
    background-color: var(--beige);
  }
  &:disabled {
    pointer-events: none;
  }
}
</style>
