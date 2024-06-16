<script setup>
const props = defineProps(['userRating'])
</script>

<template>
    <div class="flow">
        <img width="160" src="/images/illustration-thank-you.svg" alt="illustration-thank-you">
        <div class="rating__summary">
            You selected {{ userRating }} out of 5
        </div>
        <h2>Thank you!</h2>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
        </p>
    </div>
</template>

<style scoped>  
.flow {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
}

.rating__summary {
    color: var(--Orange);
    background-color: var(--Dark-Blue);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
}
</style>