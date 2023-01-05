export default function useCountPlus () {
    let count = ref(0)

    function countPlus() {
        count.value++
    }

    return {
        count, countPlus
    }
}