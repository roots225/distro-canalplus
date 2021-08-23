<template>
  <div class="flex flex-col xl:flex-row">
    <div class="w-full xl:w-1/3 px-3 pr-10 first-column">
      <h4 class="text-gray-600"><span class="text-pink-600">{{ distributors.length }}</span> <span class="">Distributeurs</span></h4>
      <h1 class="text-lg xl:text-4xl font-bold">Listes des distributeurs</h1>
      <distributor v-for="item in distributors" :key="item" :distributor="item" v-on:update="updateDistributor" v-on:zoomInMarker="handleDistributorClick" />
    </div>
    <div class="w-full xl:w-2/3 relative half-container xl:h-screen">
      <div ref="mapContainer" class="fixed w-full xl:w-2/3 mapContainer"></div>
    </div>


    <div ref="modal" class="modal hidden">
        <button class="close-modal" @click="closeModal">&times;</button>
        <!-- <h1>Modifier utilisateur</h1> -->
        <div class="input-bloc">
          

          <form @submit.prevent="submit" class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                numero du distributeur 
              </label>
              <input v-model="form.distributor_number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="45879">
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                nom du distributeur
              </label>
              <input v-model="form.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="company name">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                localisation
              </label>
              <input v-model="form.localisation" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Plateau, Abidjan">
              <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
            </div>
          </div>


          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                latitude
              </label>
              <input v-model="form.latitude" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="2.45879">
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                longitude
              </label>
              <input v-model="form.longitude" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="4.5522">
            </div>

            <div class="w-full md:w-1/2 px-3">
              <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                Enregistrer
              </button>

            </div>

          </div>
          
        </form>

        </div>
    </div>
    <div ref="overlay" class="overlay hidden" @click="closeModal"></div>



    <!-- <button id="unique">update</button> -->
  </div>
</template>

<script>
import Distributor from '../components/Distributor.vue';
import { inject, ref, onMounted, reactive } from 'vue'
import { DISTRUBTORS_USECASE_FACTORY, UPDATE_DISTRIBUTOR_USECASE} from '../core/constants'
import { MapBox } from '../core/map_box.js'

export default {
  components: {
    'distributor': Distributor,
  },

  data(){
    return{

      // singleDistributor: null,

      // form:{
      //   distributor_number: 'ok',
      //   name: '',
      //   localisation: '',
      //   latitude: '',
      //   longitude: '',
      // }

    }
  },

  setup () {
    const getAllDistributorsUsecase = inject(DISTRUBTORS_USECASE_FACTORY);
    const updateDistributorUsecase = inject(UPDATE_DISTRIBUTOR_USECASE);
    const distributors = ref([]);
    const items = ref([])
    const mapContainer = ref(null);
    let map = new MapBox();

    let singleDistributor = ''

    const form = reactive({
      distributor_number: '',
      name: '',
      localisation: '',
      latitude: '',
      longitude: ''
    }) 

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

    const updateDistributor = (distributor) =>{

      console.log(distributor)

      singleDistributor = distributor

      form.distributor_number = distributor.distributorNumber
      form.name = distributor.name
      form.localisation = distributor.localisation
      form.latitude = distributor.latitude
      form.longitude = distributor.longitude

      document.querySelector('.modal').classList.remove('hidden')
      document.querySelector('.overlay').classList.remove('hidden')

    }

    const OpenModal = () =>{

      this.$refs.modal.classList.remove('hidden')
      this.$refs.overlay.classList.remove('hidden')

    }

    const closeModal = () =>{

      document.querySelector('.modal').classList.add('hidden')
      document.querySelector('.overlay').classList.add('hidden')
      // this.$refs.modal.classList.add('hidden')
      // this.$refs.overlay.classList.add('hidden')

    }

    const submit = (id) =>{

      updateDistributorUsecase.execute(singleDistributor.id, form)

    }


    return {
      form,
      singleDistributor,

      mapContainer,
      distributors,
      handleDistributorClick,
      items,
      updateDistributor,

      OpenModal,
      closeModal
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


.show-modal {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.75rem 3.5rem;
  margin: 5rem 2rem;
  border: none;
  background-color: #fff;
  color: #444;
  border-radius: 10rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}


.hidden {
  display: none;
}
.modal {
  /* font-family: $primaryFont; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: white;
  padding: 5rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 130vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 999;
}

</style>