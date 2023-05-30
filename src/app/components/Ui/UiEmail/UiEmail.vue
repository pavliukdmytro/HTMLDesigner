<template>
  <span class="ui-email">
    <input
      ref="input"
      type="email"
      v-bind="props"
      :value="savedValue"
      :class="{ 'ui-email__fill_error': !isValid }"
      class="ui-email__fill"
      @input="handlerInput"
    />
  </span>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from 'vue';
import useValidate from '@use/useValidate/useValidate';

interface IProps {
  required?: boolean;
  pattern?: string;
  value?: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  pattern: '^([a-z0-9_-]+\\.?)+[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$',
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
.ui-email {
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
