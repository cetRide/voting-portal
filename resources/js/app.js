
// require('./bootstrap');
import './bootstrap'
import { createApp } from "vue";
import App from "./App.vue";
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

app.AOS = new AOS.init({ disable: "phone" });
app.use(PrimeVue);
app.use(store);
app.use(router);
app.mount("#app");
