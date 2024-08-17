import { createApp } from 'vue';
import './assets/style.css';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'nprogress/nprogress.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
