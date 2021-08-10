<template>
  <div class="pt-20">
    <div class="flex justify-between py-5 px-10 shadow-lg fixed w-full top-0 bg-white z-20">
      <div>
        <span class="font-medium uppercase text-red-500">Ditributeurs</span>
      </div>

      <div>
        <button class="rounded-full px-6 py-1 text-gray-900 font-medium border border-gray-700 uppercase hover:shadow-lg hover:bg-pink-500 hover:text-white hover:border-white hidden">
          Filtres
        </button>
        <button @click.prevent="doImport" :disabled="importInProgress" class="ml-5 rounded-full px-6 py-1 text-gray-900 font-medium border border-gray-700 uppercase hover:shadow-lg hover:bg-pink-500 hover:text-white hover:border-white hidden xl:inline-block">
          <img class="loader-gif inline-block mr-3" v-if="importInProgress" src="../assets/images/loader.gif" alt="loader">
          <span class="inline-block">Importer</span>
        </button>
        <Modal ref="importModal">
          <template v-slot:content>
            <form method="post" class="text-center" @submit.self.prevent="handleSubmit($event)" enctype="multipart/form-data">
              <div>
                <label for="importer">
                  Charger un fichier CSV
                  <input type="file" name="file" @change.self="handleUpload($event)" id="importer" required>
                </label>
              </div>
              <input type="hidden" name="test" value="test">
              <div class="mt-10">
                <button type="submit" class=" rounded-lg py-1 px-10 bg-pink-600 text-white">
                  Charger
                </button>
              </div>
            </form>
          </template>
        </Modal>
      </div>

      <div class="relative">
        <button class="rounded-full px-3 py-1 border border-gray-600 hover:border-pink-500 hover:shadow-lg flex">
          <i data-feather="menu"></i>
          <span class="w-1"></span>
          <i data-feather="user"></i>
        </button>
        <div class="dropdown absolute bg-pink-50 py-3 right-3 top-10 rounded-lg shadow-lg">
          <div class="">
            <ul class="m-0 p-0">
              <li>
                <a href="#" class="py-2 pl-2 pr-3 text-left" @click.prevent="logout">Deconnexion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full min-h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import { loadFeatherIcons } from '../core/helpers'
import { AuthService } from '../core/auth_service'
import { IMPORT_DISTRUBTORS_USECASE_FACTORY } from '../core/constants'
import { inject, ref } from 'vue'

export default {
  components: {
    Modal
  },
  setup() {
    loadFeatherIcons();
    const importer = inject(IMPORT_DISTRUBTORS_USECASE_FACTORY);

    const importInProgress = ref(false)
    const doImport = async () => {
      importInProgress.value = true;
      const response = await importer.execute();
      const {success, distr_number} = response.data;
      if (success) {
        alert(`You have successfully import ${distr_number} distributors.`)
      }
      importInProgress.value = false;
    }

    return {
      importInProgress,
      doImport
    }
  },
  methods: {
    async logout () {
      AuthService.logOut();
    },
    showModal (name) {
      this.$refs[name].open();
    },
    handleUpload(e) {
      const data = new FormData()
      let readFile = e.target.files[0]

      let reader = new FileReader();
      // Read file into memory as UTF-16
      reader.readAsText(readFile, "UTF-16");

      // Handle progress, success, and errors
      // reader.onprogress = updateProgress;
      reader.onload = (evt) => {
        // Obtain the read file data
        var fileString = evt.target.result;
        data.append('file', readFile);
        console.log(data.values())
      };
      reader.onerror = (error) => {
        console.log(error)
      };

      console.log(data)
    },
    handleSubmit(e) {
      
    }
  }
}
</script>

<style scoped>
  .loader-gif {
    width: 24px;
  }
</style>