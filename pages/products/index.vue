<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p of products">
                <!-- : - значит изменятся будет динамический -->
                <ProductCard :product="p"/>    
            </div>
        </div>
    </div>
</template>

<script setup>

    definePageMeta({
        layout: 'products'
    })
    
    // получение продуктов (get запрос. Можно и Post см. документацию...)
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt | Merch',
        meta: [
            { name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })
</script>

<style scoped>

</style>