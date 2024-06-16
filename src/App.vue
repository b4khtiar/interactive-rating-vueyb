<script setup>
import { ref } from 'vue'
import Card from './components/CardComponent.vue'
import Rating from './components/Rating.vue'
import ThankYou from './components/ThankYou.vue'

const userRating = ref(null)
const isSubmitted = ref(false)

const submitRating = (rate) => {
  userRating.value = rate
  isSubmitted.value = true
}
</script>

<template>
  <div class="wrapper">
    <Card>
      <Rating @submitRating="submitRating" v-if="!isSubmitted" />
      <ThankYou v-else :userRating="userRating" />
    </Card>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  padding: 1.5rem;
}
</style>
