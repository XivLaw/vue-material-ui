<template>
    <div>
        <header v-show="show">
            <slot></slot>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'MtHeader',
        props: {
            show: {
                default: true,
                type: Boolean
            }
        }
    }
</script>

<style scoped>

</style>