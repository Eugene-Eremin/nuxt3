<template>
    <div>
        <h1>Id: {{ id }}</h1>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>