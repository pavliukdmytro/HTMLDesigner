import { ref } from 'vue';

const screenWidth = ref(window.innerWidth);

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});

export default function useScreenWidth() {
  return screenWidth;
}
