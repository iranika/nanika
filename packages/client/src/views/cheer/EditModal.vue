<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-button slot="end" @click="dissmiss()" color="">close</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Icon Image URL</ion-label>
          <ion-input v-model="content.imgsrc"></ion-input>     
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Text</ion-label>
          <ion-textarea v-model="texts"></ion-textarea>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-content>
</template>

<script lang="ts">
import { Cheer } from '@/types/Cheer';
import { IonContent, IonHeader, IonTitle, IonToolbar, modalController, IonInput, IonTextarea /*IonPage*/} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea },
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
    cheer: Cheer
  },
  data(props) {
    return {
      content: props.cheer,
    }
  },
  computed:{
    texts:{
      get(): string{
        return this.content.texts.join("\n")
      },
      set(value: string){
        this.content.texts = value.split("\n") ?? [""]
      }
    }
  },
  methods:{
    dissmiss(){
      modalController.dismiss();
    }
  },
});
</script>