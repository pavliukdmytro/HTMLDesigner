<template>
  <div>Hello Test</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  result: Object,
});
console.log(props);
</script>
