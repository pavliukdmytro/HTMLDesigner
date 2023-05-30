<template>
  <Modal :model-value="props?.isOpen.value" :close="hide" @after-leave="afterLeave">
    <div
      class="modal"
      :class="{ modal_wide: props?.options?.width }"
      :style="{ 'max-width': props?.options?.width }"
    >
      <span class="modal__close" @click="hide">
        <svg class="modal__icon">
          <use xlink:href="#svg-close"></use>
        </svg>
      </span>
      <slot />
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import useModal from '@use/useModal/useModal';

const modal = useModal();

const props = defineProps<{
  isOpen: Ref;
  options?: {
    width?: string;
  };
  afterLeave: () => void;
}>();

const hide = () => {
  modal.hide();
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: #fff;
  position: relative;
  padding: 24px;
  &_wide {
    width: 100%;
  }
  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
  &__icon {
    width: 16px;
    height: 16px;
  }
}
</style>
