<template>
  <ion-page>
    <default-toolbar></default-toolbar>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cheer Editor</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <div id="container">
              <h1>Cheer Editor</h1>
              <div>id:{{state.cheers.id}}</div>
              <ion-list>
                <ion-list-header style="text-align:center;">Cheer Editorの説明</ion-list-header>
                <chat-box
                  v-for="(cheer, i) in state.cheers.Cheer" :key="i"
                  :cheer="cheer"
                  @click="EditChatBox(cheer, i)"
                ></chat-box>
                <ion-item>
                  <iframe style="margin: 0 auto;" width="560" height="347" frameborder="0" allowfullscreen="" src="https://chobit.cc/embed/9iblv/89x2uola?aid=iranica"></iframe>
                </ion-item>
                <ion-item>
                  <ion-avatar slot="start"><img src="https://pbs.twimg.com/profile_images/1384742457477238784/R_eEQtFX_400x400.jpg"></ion-avatar>
                  <ion-label text-wrap>
                    <p>アイコンの画像はプリセットを用意しておき、そこからユーザが選択する形式になる予定です。ゆくゆくはアップロードに対応するかも？</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-avatar slot="start"><img src="https://pbs.twimg.com/profile_images/1384742457477238784/R_eEQtFX_400x400.jpg"></ion-avatar>
                  <ion-label text-wrap>
                    <p>ちなみにTwitterアカウントでのログインに対応します（確定事項）</p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </div>
          </ion-col>
          <ion-col>
            <div>{{state.cheers}}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>

</template>


<script lang="ts">
import { IonContent, IonPage, IonTitle, } from '@ionic/vue';
import DefaultToolbar from '../../components/DefaultToolbar.vue';
import ChatBox from "../../components/cheer/ChatBox.vue";
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useRouter } from "vue-router";
import { firestoreSimple, CheerRef } from "../../firebase/firebase";
import { Cheer, Cheers } from '../../types/Cheer';

export default {
  name: 'Editor',
  setup(){
    const router = useRouter();
    const state = reactive({
      cheers: new Cheers(),
    })
    
    onBeforeMount(async ()=>{
      if (router.currentRoute.value.params.itemid == null){
        const cheer = firestoreSimple.collection<Cheers>({
          path: "/cheer"
        })
        const doc = await cheer.fetch("7VgZ5AS5gpv4O8dhk7zW")
        state.cheers = doc ?? new Cheers();
      }else{
        console.log("router-params", router.currentRoute.value.params);        
        const cheer = firestoreSimple.collection<Cheers>({
          path: "/cheer"
        })
        const doc = await cheer.fetch(router.currentRoute.value.params.itemid.toString())
        state.cheers = doc ?? new Cheers();
      }
    })

    const EditChatBox = (CheerJson: Cheer, i: number)=>{
      CheerJson.texts = ["Clear"]
      console.log(state.cheers)
    }
    return {
      state,
      EditChatBox
    }
  },
  /*
  methods:{
    async EditChatBox(CheerJson: Cheer, i: number)
  },*/
  components: {
    IonContent,
    IonPage,
    IonTitle,
    DefaultToolbar,
    ChatBox
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  max-width:600px;
  margin: 0 auto;
}

p {
  
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