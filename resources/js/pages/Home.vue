<template>
  <div class="flex flex-col xl:flex-row">
    <div class="w-full xl:w-1/3 px-3 pr-10">
      <h4 class="text-gray-600"><span class="text-pink-600">{{ distributors.length }}</span> <span class="">Distributeurs</span></h4>
      <h1 class="text-lg xl:text-4xl font-bold">Listes des distributeurs</h1>
      <distributor v-for="item in distributors" :key="item" :distributor="item" v-on:zoomInMarker="handleDistributorClick" v-on:distToTop="handleDistrToTop"></distributor>
    </div>
    <div class="w-full xl:w-2/3">
      <gmaps-map @mounted="handleMapInstance" :options="mapOptions">
        <gmaps-marker v-for="(item, i) in options" :key="i" :options="item.options" @mouseover="handleMarkerHover" @click="handleMarkerClick" />
      </gmaps-map>
    </div>
  </div>
</template>

<script>
import Distributor from '../components/Distributor.vue';
import { gmapsMap, gmapsMarker } from '../assets/js/x5-gmaps/x5-gmaps.es';
import { mapOptions } from "../helpers";
import { inject, ref, onMounted } from 'vue'
import { DISTRUBTORS_USECASE_FACTORY } from '../core/constants'

export default {
  components: {
    'distributor': Distributor,
    gmapsMap, gmapsMarker
  },
  data () {
    return {
      mapOptions,
    }
  },
  // created() {
  //   this.items.push({
  //     lat: 5.405497,
  //     lng: -3.390339
  //   });
  //   this.items.push({
  //     lat: 5.385992,
  //     lng: -3.991032
  //   });
  // },
  setup() {
    const getAllDistributorsUsecase = inject(DISTRUBTORS_USECASE_FACTORY);
    const distributors = ref([]);
    const items = ref([])
    const options = ref([])
    let map = null

    const resetInitialCenter = (map) => {
      map.setCenter({ lat: 5, lng: -3 })
    }

    onMounted(async () => {
      distributors.value = await getAllDistributorsUsecase.execute();
      distributors.value.forEach(item => {
        items.value.push({
          lat: item.latitude,
          lng: item.longitude
        });

        options.value.push({
          options: {
            title: item.name,
            position: {
              lat: item.latitude,
              lng: item.longitude
            }
          }
        });
      });
    });

    const focusOnAMarker = (d) => {
      options.value = options.value.map(item => {
        if (item.options.position.lat == d.latitude && item.options.position.lng == d.longitude) {
          item.options.zIndex = 99
          item.options.animation = 0
        } else {
          item.options.zIndex = 0
          item.options.animation = 0
        }

        return item;
      })
    }

    const handleMarkerClick = (e) => {
      console.log(e)
    }

    const handleDistributorClick = (distributor) => {
      let markerPosition = {
        lat: distributor.latitude,
        lng: distributor.longitude,
      };
      map.setZoom(17);
      map.panTo(markerPosition);
    }

    

    const handleMapInstance = (mp) => {
      map = mp;
    }

    const handleMarkerHover = (e) => {
      console.log(e)
    }

    const handleDistrToTop = (d) => {
      let markerPosition = {
        lat: d.latitude,
        lng: d.longitude,
      };

      map.setZoom(12)
      map.setCenter(markerPosition)
    }

    return {
      distributors,
      handleMarkerClick,
      handleDistributorClick,
      handleMarkerHover,
      handleDistrToTop,
      handleMapInstance,
      options,
      items
    }
  }
}
</script>

<style>
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
    z-index: 11
  }
}
.gmaps-map {
  height: 100%;
}
</style>