<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est nisi ducimus laudantium exercitationem numquam quia optio debitis delectus odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est nisi ducimus laudantium exercitationem numquam quia optio debitis delectus odio.</p>
        <div>{{ f }}</div>
        <div>---</div>
        <div>{{ one }}</div>
    </div>
</template>

<script setup>
    // перед тем как эта страница страница отобразится, санчала отработает функция в middleware, файл которой пишется ниже тут...
    definePageMeta({
        middleware: ["auth"]
    })

    const { data: f } = await useFetch('/api/ninja')
    const { data: one } = await useFetch('/api/currency/EUR')
</script>
    
<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>