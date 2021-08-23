<template>
  <div class="flex flex-col xl:flex-row">
    <div class="w-full xl:w-1/3 px-3 pr-10 first-column">
      <h4 class="text-gray-600"><span class="text-pink-600">{{ distributors.length }}</span> <span class="">Distributeurs</span></h4>
      <h1 class="text-lg xl:text-4xl font-bold">Listes des distributeurs</h1>
      <distributor v-for="item in distributors" :key="item" :distributor="item" v-on:zoomInMarker="handleDistributorClick" />
    </div>
    <div class="w-full xl:w-2/3 relative half-container xl:h-screen">
      <div ref="mapContainer" class="fixed w-full xl:w-2/3 mapContainer"></div>
    </div>
  </div>
</template>

<script>
import Distributor from '../components/Distributor.vue';
import { inject, ref, onMounted } from 'vue'
import { DISTRUBTORS_USECASE_FACTORY } from '../core/constants'
import { MapBox } from '../core/map_box.js'

export default {
  components: {
    'distributor': Distributor,
  },
  setup () {
    const getAllDistributorsUsecase = inject(DISTRUBTORS_USECASE_FACTORY);
    const distributors = ref([]);
    const items = ref([])
    const mapContainer = ref(null);
    let map = new MapBox();

    onMounted(async () => {
      distributors.value = await getAllDistributorsUsecase.execute();
      map.load(mapContainer.value);
      
      distributors.value.forEach(item => {
        item.marker = map.addMarker(item.latitude, item.longitude, item.name)
      });
      
      // fitbounds to markers
      const arrayBounds = distributors.value.map(item => [item.longitude, item.latitude])
      map.map.fitBounds(arrayBounds);
    })

    const handleDistributorClick = (item) => {
      const dist = distributors.value.find(el => el.id == item.id)
      const lngLat = dist.marker.getLngLat();
      map.zoomOnPoint(lngLat.lat, lngLat.lng)
    }

    return {
      mapContainer,
      distributors,
      handleDistributorClick,
      items
    }
  }
}
</script>

<style>
.first-column {
  height: calc(100vh - 55px);
}
.mapContainer {
  height: calc(100vh - 50%);
  bottom: 0;
  z-index: 11
}
.half-container {
  height: 50vh;
}
.gmaps-wrapper {
  position: fixed;
  height: calc(100vh - 50%);
  width: 100%;
  bottom: 0;
  z-index: 11
}
@media screen and (min-width: 1280px) {
  .gmaps-wrapper {
    position: fixed;
    height: calc(100vh - 55px);
    width: 67%;
    /* top: 54px; */
    bottom: 0;
  }

  .first-column {
    height: auto;
  }

  .half-container {
    height: 100vh;
  }

  .mapContainer {
    height: calc(100vh - 74px);
  }
}
.gmaps-map {
  height: 100%;
}
</style>