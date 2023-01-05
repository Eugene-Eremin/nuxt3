<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est nisi ducimus laudantium exercitationem numquam quia optio debitis delectus odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est nisi ducimus laudantium exercitationem numquam quia optio debitis delectus odio.</p>
        <!-- LazySomeInFolder - для отоброжения компонента по какому то условию -->
        <SomeInFolder>In Component</SomeInFolder>
        <h1>Счетчик</h1>
        <p>{{ count }}</p>
        <button class="btn" @click="countPlusButton">+ count</button>
    </div>
</template>

<script setup>

// Будет работать, можно без mounted
// function aaa() {
//     console.log('aboba')    
// }

// aaa()


// ===============

// let count = ref(0) // [] - массив, '' - строка и тд

// function countPlus() {
//     console.log(count)
//     count.value++
// }

// или можно с помощью composables

const { count, countPlus } = useCountPlus()

function countPlusButton() {
    countPlus()
    console.log(count)
}

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