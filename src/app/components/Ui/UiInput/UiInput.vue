<template>
  <span class="ui-input">
    <input
      ref="input"
      v-bind="props"
      :value="savedValue"
      :class="{ 'ui-input__fill_error': !isValid }"
      class="ui-input__fill"
      @input="handlerInput"
    />
  </span>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from 'vue';
import useValidate from '@use/useValidate/useValidate';

interface IProps {
  type?: string;
  required?: boolean;
  pattern?: string;
  value?: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
});

const savedValue = ref(props.value);

const handlerInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  savedValue.value = target.value;
};

const input = ref<HTMLInputElement | null>(null);

const isValid: Ref<boolean> = useValidate(input);

watch(props, (newProps) => {
  savedValue.value = newProps.value;
});
</script>

<style lang="scss" scoped>
.ui-input {
  &__fill {
    width: 100%;
    height: 40px;
    padding: 15px;
    border: 1px solid black;
    &_error {
      border-color: red;
    }
  }
}
</style>
