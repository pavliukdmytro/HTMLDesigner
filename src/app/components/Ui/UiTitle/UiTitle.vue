<template>
  <div
    class="ui-title"
    :class="{
      'ui-title-1': props.result == 1,
      'ui-title-2': props.result == 2,
      'ui-title-3': props.result == 3,
      'ui-title-center': center,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  result: number;
  center?: boolean;
}>();
</script>

<style lang="scss" scoped>
.ui-title {
  margin-bottom: 24px;
  :deep(> *) {
    text-transform: uppercase;
    margin-bottom: 0;
  }
}
.ui-title-1 {
  margin-bottom: 24px;
  :deep(> *) {
    font-size: rem(18);
    @include point-md {
      font-size: rem(24);
    }
  }
}
.ui-title-2 {
  :deep(> *) {
    font-size: rem(16);
    @include point-md {
      font-size: rem(18);
    }
  }
}
.ui-title-3 {
  :deep(> *) {
    font-size: rem(14);
    @include point-md {
      font-size: rem(16);
    }
  }
}
.ui-title-center {
  text-align: center;
}
</style>
