<template>
    <div>
        <header v-show="show">
            <solt></solt>
        </header>
    </div>
</template>

<script>
    export default {
        props: {
            show: Boolean
        }
    }
</script>

<style scoped>

</style>