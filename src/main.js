import { createApp } from 'vue'
import App from '@/App.vue'
import '@splidejs/splide/dist/css/splide.min.css';
import '@/assets/main.css'
import VueSplide from '@splidejs/vue-splide';
import router from "@/router/router";
const app = createApp( App );
app
    .use( VueSplide )
    .use (router)
    .mount( '#app' );
