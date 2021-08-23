require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import gmaps from '../../node_modules/x5-gmaps/dist/x5-gmaps.es';
import gmaps from './assets/js/x5-gmaps/x5-gmaps.es';
import { dependencies } from './features/dependencies_injection'

const app = createApp(App);
app.use(router);
app.use(gmaps, {
  key: 'AIzaSyCHU9YNJ5GClzKNa3ajzJ8r-mHUUNaPIOk',
  libraries: ["visualization"]
});
app.use(dependencies, {
  app: app
})
app.mount('#app');