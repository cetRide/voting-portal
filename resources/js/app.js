
// require('./bootstrap');
import './bootstrap'
import ConfirmationService from 'primevue/confirmationservice';
import { createApp } from "vue";
import App from "App.vue";
import "./assets/styles/app.sass";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router/router";
import store from "./store/index";
import PrimeVue from "primevue/config";
const app = createApp(App);

import VueGoogleMaps from '@fawmi/vue-google-maps'

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA2yy50Uw-pS7o17DrS7J3txklCtOiL9AI',
    },
});
app.AOS = new AOS.init({ disable: "phone" });
app.use(ConfirmationService)
app.use(PrimeVue);
app.use(store);
app.use(router);
app.mount("#app");
