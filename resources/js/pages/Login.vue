<template>
  <div class="login-page w-100 h-screen flex justify-center">
    <div class="rounded-2xl bg-white p-4 lg:w-1/3 relative z-10 self-center text-center">
      <div class="login-header pb-3">
        <h2>Connexion</h2>
      </div>
      <hr class="bg-pink-600 h-0.5 mb-10">

      <div class="login-form-container">
        <form action="">
          <div class="text-left mb-5">
            <label for="email" class="block">Email : </label>
            <input type="email" name="email" v-model="formData.email" class="min-w-full rounded-lg outline-none focus:border-pink-600 box-shad" placeholder="email" required>
          </div>

          <div class="text-left mb-5">
            <label for="password" class="block">Mot de passe : </label>
              <input type="password" name="password" v-model="formData.password" class="min-w-full rounded-lg focus:border-pink-600 focus:outline-none" placeholder="Mot de passe" required>
          </div>

          <div class="flex justify-center">
            <button class="m-5 py-2 px-10 text-white rounded-xl bg-pink-600 hover:bg-pink-400 flex justify-between" @click.prevent="doLogin" :disabled="loading">
              <i class="block mt-1 mr-1 fa fa-spin fa-spinner" v-if="loading"></i>
              <span :class="{'pl-5': loading}">Connexion</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SIGN_IN_USECASE_FACTORY } from '../core/constants'
import { ref, inject }  from 'vue'

export default {
  setup() {

    const formData = ref({
      email: 'admin@admin.com',
      password: 'password'
    });

    const loading = ref(false);

    const login = inject(SIGN_IN_USECASE_FACTORY);
    const doLogin = async () => {
      loading.value = true;
      const response = await login.execute(formData.value);
      console.log(response)
    }
    return {
      formData,
      loading,
      doLogin
    }
  }
}
</script>
<style>
  .login-page {
    background-image: url('../assets/images/login_screen.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .login-page:before {
    display: 'block';
    content: '';
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
</style>