<template>
  <label class="ui-checkbox">
    <input v-bind="props" ref="input" type="checkbox" class="ui-checkbox__input" />
    <span class="ui-checkbox__front" :class="{ 'ui-checkbox__front_error': !isValid }">
      <svg class="ui-checkbox__icon"><use xlink:href="#svg-check"></use></svg>
    </span>
    <span class="ui-checkbox__text">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useValidate from '@use/useValidate/useValidate';

const props = defineProps<{
  name?: string;
  required?: boolean;
  checked?: boolean;
}>();

const input = ref(null);
const isValid = useValidate(input);
</script>

<style lang="scss" scoped>
.ui-checkbox {
  display: inline-flex;
  cursor: pointer;
  &__input {
    display: none;
    &:checked + .ui-checkbox__front {
      background-color: #000;
      border-color: #000;
      .ui-checkbox__icon {
        fill: #fff;
      }
    }
  }
  &__front {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    width: 18px;
    height: 18px;
    transition: 0.2s linear border-bottom-color, 0.2s linear background-color;
    &_error {
      border-color: red;
    }
  }
  &__icon {
    display: block;
    height: 18px;
    width: 18px;
    fill: transparent;
    transition: 0.2s linear fill;
  }
  &__text {
    margin-left: 10px;
  }
}
</style>
