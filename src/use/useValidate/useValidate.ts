import { ref, Ref, onMounted } from 'vue';

export default function useValidate(input: Ref<HTMLInputElement | null>): Ref<boolean> {
  const isValid = ref<boolean>(true);

  const checkValidity = (e: FocusEvent | Event) => {
    const target = e.target as HTMLInputElement;
    isValid.value = target.checkValidity();
  };

  onMounted(() => {
    if (input.value) {
      input.value.addEventListener('invalid', (e: Event) => {
        e.preventDefault();
        isValid.value = false;
      });

      input.value.addEventListener('blur', (e: FocusEvent) => {
        checkValidity(e);
      });

      if (input.value.type === 'checkbox') {
        input.value?.addEventListener('change', (e: Event) => {
          checkValidity(e);
        });
      }
    }
  });

  return isValid;
}
