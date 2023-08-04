<script lang="ts" setup>
interface Photo {
    photo: {
        albumId: Number,
        id: Number,
        title: String,
        url: String,
        thumbnailUrl: String
    }
}
const numberGlobal = 5
const props = defineProps<Photo>();
</script>

<template>
    <div class="card">
        <h2>{{ photo.title }}</h2><img :src="photo.thumbnailUrl" :alt="photo.title" />
    </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  h2 {
    font-size: 16px;
  }
}

</style>

