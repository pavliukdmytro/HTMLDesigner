<template>
  <span class="ui-input-control">
    <input
      ref="input"
      class="ui-input-control__hidden"
      type="text"
      :name="props.name"
      :required="props.required"
      :value="getValueForHiddenInput"
    />
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :class="{ 'ui-input-control__fill_error': !isValidHidden && !getValueForHiddenInput }"
      class="ui-input-control__fill"
      @input="handlerInput"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, Ref, ref, watch } from 'vue';
import useValidate from '@use/useValidate/useValidate';

interface IProps {
  name?: string;
  type?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  isValid?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  value: '',
});

const savedValue = ref(props.value);

const input = ref<HTMLInputElement | null>(null);

const isValidHidden: Ref<boolean> = useValidate(input);

const getValueForHiddenInput = computed(() => {
  if (props.isValid) {
    return savedValue.value;
  }
  return '';
});

const handlerInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement;
  savedValue.value = target.value;
};

watch(props, (newProps, oldValue) => {
  if (newProps.value !== oldValue.value) {
    savedValue.value = newProps.value;
  }
});
</script>

<style lang="scss" scoped>
.ui-input-control {
  &__hidden {
    display: none;
  }
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
