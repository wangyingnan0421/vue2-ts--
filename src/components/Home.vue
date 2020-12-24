<template>
  <div>
        <input type="text" v-model="name">
        {{name}}
        <button @click="demo">点击</button>
        <v-son/>
  </div>
</template>

<script lang="ts">
import { Vue,Component,Watch } from "vue-property-decorator";
// import { component } from "vue/types/umd";
import vSon from './son.vue';
@Component({
    components:{
        vSon,
    }
})
export default class Home extends Vue{
     name = 'li';
    private menu:any[] = [1,2,3];
    demo(){
        console.log(this.name);
        
    }
    
}
</script>

<style>
div{
    font-size: 1rem;
    font-size: 1.25rem;
}

</style>