<template>
<ion-app>
  <ion-menu side="start" menu-id="toolbar" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title router-link="/home" @click="closeFirst()">Nanika Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item router-link="/cheer/edit" @click="closeFirst()">Cheer editor</ion-item>
        <ion-item router-link="/cheer/edit/7VgZ5AS5gpv4O8dhk7zW" @click="closeFirst()">edit cheer data</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-app>
</template>
<style>
.my-custom-menu {
  --width: 300px;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  menuController,
  IonApp
} from '@ionic/vue';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList,
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar,
    IonApp
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'toolbar');
      menuController.open('toolbar');
    },
    closeFirst(){
      menuController.close("toolbar");
    }
  }
});
</script>