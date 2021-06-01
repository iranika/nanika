<template>
  <ion-item>
    <ion-avatar slot="start">
      <img :src="cheer.imgsrc" /></ion-avatar>
    <ion-label text-wrap>
      <p v-for="text in cheer.texts" :key="text">
        {{text}}
      </p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import Vue from "vue"
import { IonLabel, IonItem, IonAvatar } from '@ionic/vue';
import {Cheer} from "../../types/Cheer";


export default {
  name: "ChatBox",
  props:{
    cheer: Object as Vue.PropType<Cheer>
  },
  components:{
    IonLabel, IonItem, IonAvatar
  }
};
</script>

<style>
</style>