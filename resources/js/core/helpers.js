import feather from 'feather-icons';
import { onMounted } from 'vue';

export const loadFeatherIcons = () => {
  onMounted(() => {
    feather.replace();
  })
}