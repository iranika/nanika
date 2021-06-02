
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>Nanika</ion-title>
      
      <ion-split-pane></ion-split-pane>
      <ion-avatar small slot="end" v-if="state.state.isLogin" @click="openActionSheet()">
        <img :src="state.state.photoURL">
      </ion-avatar>
      <ion-button v-else slot="end" color="primary" small @click="state.signin()">
        Login
      </ion-button>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonAvatar, actionSheetController} from '@ionic/vue';
import { reactive, toRefs } from 'vue';
import { useAuthStore } from "../stores/auth";

export default {
  name: 'DefaultToolbar',
  setup(){
    const state = useAuthStore()
    const openActionSheet = async ()=>{
      const actionSheet = await actionSheetController.create({
        header: "Account Setting",
        cssClass: "my-custom-class",
        buttons: [
          {
            text: "Logout",
            handler: state.signout
          },
          {
            text: "Help:WIP"
          },
          {
            text: "Close",
            role: "cancel"
          }
        ]
      });
      return actionSheet.present();
    }
    return {
      state,
      openActionSheet
      //...toRefs(state)
    }
  },
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonAvatar,
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>