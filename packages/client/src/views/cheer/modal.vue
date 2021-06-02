<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      this is title.
      {{ content }}
    </ion-content>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, /*IonPage*/ } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar}
});
</script>