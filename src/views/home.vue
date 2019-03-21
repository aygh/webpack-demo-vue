<template>
    <div>
        <h1>home</h1>
    </div>
</template>
<script>
export default {
    methods: {
        fn() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(3)
                }, 0)
            })
        },

        async fn2() {
            try {
                const res = await this.fn()
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },

        fn3() {
            console.log(1)
        }
    },
    created() {
        this.fn2()
    }
}
</script>


