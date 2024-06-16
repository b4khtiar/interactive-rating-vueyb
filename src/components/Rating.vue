<script setup>
import { ref } from 'vue'

const userRating = ref(null)
const emit = defineEmits(['submitRating'])
const handleSubmit = () => {
    if (!userRating.value) {
        alert('Please select a rating')
    } else {
        emit('submitRating', userRating.value)
    }
}
</script>
<template>
    <div class="flow">
        <div class="icon">
            <img src="/images/icon-star.svg" alt="icon star">
        </div>
        <div>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
        </div>

        <div class="rating__buttons">
            <button v-for="n in 5" :key="n" @click="userRating = n" class="rating__button"> {{ n }} </button>
        </div>
        <button @click="handleSubmit" class="rating__submit">Submit</button>
    </div>
</template>

<style scoped>
.flow {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.icon {
    background-color: var(--Dark-Blue);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
}

h1 {
    font-size: 1.85rem;
    margin-bottom: 0.5rem;
}

.rating__buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.rating__button {
    background-color: var(--Dark-Blue); 
    color: var(--Light-Grey);
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    font-weight: 700;
    transition: background-color 0.25s ease-in;
}

.rating__button:hover {
    background-color: var(--Orange);
    color: var(--Very-Dark-Blue);
    transition: background-color 0.25s ease-in;
}

.rating__button:focus {
    background-color: var(--White);
    color: var(--Very-Dark-Blue);
}
.rating__submit {
    background-color: var(--Orange);
    border: none;
    border-radius: 24px;
    padding: 1rem;
    color: var(--Very-Dark-Blue);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.25s ease-in;
}

.rating__submit:hover {
    background-color: var(--White);
    transition: background-color 0.25s ease-in;
}

.rating__submit:active {
    background-color: var(--Light-Grey);
    transition: background-color 0.05s;
}
</style>