<template>
  <default-toolbar></default-toolbar>
  <ion-content>
    <div id="firebaseui-auth-container"></div>
  </ion-content>
</template>

<script>
import DefaultToolbar from '../components/DefaultToolbar.vue'
import firebase from "../firebase/firebase";
import firebaseui from "firebaseui";

import {
  IonContent,
  //IonHeader,
  //IonPage,
  //IonTitle,
  //IonToolbar
  } from '@ionic/vue';
import { onMounted } from 'vue';
import { useAuthStore } from "../stores/auth"

export default {
  components: { DefaultToolbar,IonContent },
  setup(){
    const state = useAuthStore();
    /*
    onMounted(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
        if (state.state.isLogin)
      })
    })
    */
  }
}
</script>

<style>

</style>