<template>
  <div :class="props.class">
    <Transition name="fade" appear>
      <div v-if="props.isShow.value" class="modal-fade" @click="modal.hide()"></div>
    </Transition>
    <Transition name="swipe" appear @after-leave="props.leave">
      <div v-if="props.isShow.value" class="modal-swipe" :style="{ 'max-width': width }">
        <span class="modal-swipe__close" @click="modal.hide()">
          <svg class="modal-swipe__icon">
            <use xlink:href="#svg-close"></use>
          </svg>
        </span>
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import useModalSwipe from '@/use/useModalSwipe/useModalSwipe';

const modal = useModalSwipe();
const props = defineProps({
  isShow: Object,
  leave: Function,
  width: String,
  class: String,
});
</script>

<style lang="scss" scoped>
.modal-fade {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.modal-swipe {
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  @include point-md {
    padding: 24px;
  }
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  &__icon {
    display: block;
    width: 24px;
    height: 24px;
  }
}
.swipe-enter-active,
.swipe-leave-active {
  transition: transform 0.5s ease;
}

.swipe-enter-from,
.swipe-leave-to {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
