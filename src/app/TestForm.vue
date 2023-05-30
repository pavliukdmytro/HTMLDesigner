<template>
  <form class="test-form" @submit.prevent="handlerSubmit">
    <UiInput required placeholder="input" />
    <UiEmail required placeholder="email" />
    <UiCheckbox required>checkbox</UiCheckbox>
    <UiButtonPrimary type="submit"> submit </UiButtonPrimary>
  </form>
</template>

<script lang="ts" setup>
import UiEmail from '@components/Ui/UiEmail/UiEmail.vue';
import UiInput from '@ui/UiInput/UiInput.vue';
import UiButtonPrimary from '@ui/UiButton/UiButtonPrimary.vue';
import UiCheckbox from '@ui/UiCheckbox/UiCheckbox.vue';

const handlerSubmit = () => {
  console.log('submit');
};
</script>

<style lang="scss" scoped>
.test-form {
  display: grid;
  grid-row-gap: 20px;
}
</style>
