<template>
  <div class="py-3 text-gray-500 border-b relative border-pink-500 cursor-pointer" @mouseout="removeTop(distributor)" @mouseover="showTop(distributor)" @click="zoomInMarker(distributor)">
    <h4 class="font-medium">Numéro distributeur : <span class="text-pink-600">{{ distributor.distributorNumber }}</span></h4>
    <h2 class="text-gray-800 text-xl font-medium">{{ distributor.name }}</h2>
    <div>
      <span>Localisation</span> : <span>{{ distributor.localisation }}</span>
    </div>
    <div>
      <span>Ville</span> : <span class="text-black">{{ distributor.city }}</span>
    </div>
    <div class="py-1 px-8 rounded-2xl bg-pink-500 text-white absolute top-12 right-10 invisible xl:visible" :class="{'hidden': toTop !== distributor.id}">
      Cliquer pour zoomer
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'distributor',
  props: {
    distributor: Object
  },
  setup(props, { emit }) {
    const toTop = ref(null);

    const showTop = (distributor) => {
      toTop.value = distributor.id;
      emit('distToTop', distributor);
    }

    const removeTop = (distributor) => {
      toTop.value = null;
    }

    const zoomInMarker = (distributor) => {
      emit('zoomInMarker', distributor);
    }

    return {
      showTop,
      removeTop,
      zoomInMarker,
      toTop
    }
  },
}
</script>