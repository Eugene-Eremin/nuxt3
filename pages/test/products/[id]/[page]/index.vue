<template>
    <div>
        <h1>Id: {{ id }}</h1>
        <h1>Page: {{ page }}</h1>
    </div>
</template>

<script setup>
const { id, page } = useRoute().params
</script>

<style scoped>

</style>