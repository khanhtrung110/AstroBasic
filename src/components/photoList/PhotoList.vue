<script setup lang="ts">
 import axios from 'axios';
import { useStore } from '@nanostores/vue'
import { photos } from "../../store/photos";
import PhotoCard from "../photoCard/PhotoCard.vue"
import { onMounted } from 'vue';
const fetchedPhotos:any = useStore(photos)
const props = defineProps({
    listName: Array<string>
})
const handleClick = () => {
    console.log('Click');
    
}
console.log('hydration complete!!');
onMounted(() => {
 axios.get('/api/products/buildwith.json').then(res => console.log(res.data))

})

</script>

<template>
    <span @click="handleClick">{{ listName?.join(', ') }}</span>
    <slot>Title</slot>
    <h2 v-if="fetchedPhotos?.isLoading">loading ...</h2>
    <PhotoCard v-else v-for="photo in fetchedPhotos.data" :photo="photo" />
</template>