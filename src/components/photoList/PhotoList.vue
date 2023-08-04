<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { photos } from "../../store/photos";
import PhotoCard from "../photoCard/PhotoCard.vue"
const fetchedPhotos:any = useStore(photos)
const props = defineProps({
    listName: Array<string>
})
const handleClick = () => {
    console.log('12345');
    console.log('numberGlobal');
    
}

</script>

<template>
    <span @click="handleClick">{{ listName?.join(', ') }}</span>
    <slot>Title</slot>
    <h2 v-if="fetchedPhotos?.isLoading">loading ...</h2>
    <PhotoCard v-else v-for="photo in fetchedPhotos.data" :photo="photo" />
</template>