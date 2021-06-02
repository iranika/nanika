<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openModal('News Title')">Open Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonPage, modalController } from '@ionic/vue';
import Modal from "./modal.vue";

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openModal(text: string) {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: text
          },
        })
      return modal.present();
    },
  },
}
</script>