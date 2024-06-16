<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 1rem;
    color: var(--White);
    background-image: linear-gradient(var(--Dark-Blue), var(--Very-Dark-Blue));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem 1.5rem;
}

@media (min-width: 460px) {
    .card {
        padding: 2.5rem 2rem;
    }
}
</style>