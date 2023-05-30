<template>
  <div class="app">
    <div class="app-header">
      <AppInput v-model="inputValue" @input="handlerInput" @keyup.enter="handlerSave" />
      <button class="app-button" type="button" @click="handlerSave">save</button>
    </div>
    <div class="app-items">
      <AppItem v-for="item in inputItems" :key="item.id" :result="item" @remove="handlerRemove" />
    </div>
    <button @click="handlerClick">Open modal</button>
    <br />
    screen width: {{ screenWidth }}
    <br />
    <button @click="handlerOpenSwipeModal">open swipe modal</button>
    <br />
    <br />
    <button @click="loaderStart">loader start</button>
    <TestForm />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

import useModal from '@use/useModal/useModal';
import useScreenWidth from '@/use/useScreenWidth';
import useModalSwipe from '@/use/useModalSwipe/useModalSwipe';
import useLoader from '@/use/useLoader/useLoader';
import TestSwipeModal from '@components/Modals/TestSwipeModal.vue';
import TestForm from '@/app/TestForm.vue';

import AppInput from './AppInput.vue';
import AppItem from './AppItem';

const screenWidth = useScreenWidth();

interface InputItems {
  id: number;
  text: string;
}

const inputValue = ref('');
const inputItems: Ref = ref([]);

const handlerInput = (e: PointerEvent): void => {
  const { value } = e.target as HTMLInputElement;
  inputValue.value = value;
};
const handlerSave = (): void => {
  inputItems.value.unshift({
    id: Date.now(),
    text: inputValue.value,
  });
};

const handlerRemove = (id: number): void => {
  inputItems.value = inputItems.value.filter((el: InputItems): boolean => el.id !== id);
};
const modal = useModal();
const handlerClick = () => {
  modal.show(TestSwipeModal);
};
const modalSwipe = useModalSwipe();

const handlerOpenSwipeModal = () => {
  modalSwipe.show(
    TestSwipeModal,
    {},
    {
      width: '280px',
    }
  );
};
const loader = useLoader();

const loaderStart = () => {
  loader.start();
  setTimeout(() => {
    loader.stop();
  }, 2000);
};
</script>

<style lang="scss" scoped>
.app {
  margin-top: 60px;
}
.app-items {
  display: grid;
  grid-row-gap: 20px;
}
.app-button {
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  margin-left: 20px;
}
.app-header {
  display: flex;
  align-items: stretch;
  margin-bottom: 20px;
}
</style>
