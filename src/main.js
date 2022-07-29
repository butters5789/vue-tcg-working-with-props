import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const vueApp = createApp(App);

vueApp.component('friend-contact', FriendContact);

vueApp.mount('#app');
