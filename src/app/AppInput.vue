<template>
  <div class="app-input">
    <input class="app-input__area" type="text" />
    {{ screenWidth }}
  </div>
</template>

<script lang="ts" setup>
import useScreenWidth from '@/use/useScreenWidth';
import useModal from '@use/useModal/useModal';

const screenWidth = useScreenWidth();

const modal = useModal();
</script>

<style lang="scss" scoped>
.app-input {
  flex-grow: 1;
  &__area {
    height: 100%;
    width: 100%;
    padding: 5px 15px;
  }
}
</style>
