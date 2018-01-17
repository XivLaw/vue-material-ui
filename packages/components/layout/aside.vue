<template>
    <div>
        <aside>123</aside>
    </div>
</template>

<script>
    export default {
        name: 'MtAside',
        props: {
            headImg: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped lang="less">
    aside{
        position: fixed;
        background: #fff;
        height: calc(~"100% - 70px");
        top: 70px;
        transition: all;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        z-index: 10;
        overflow-y: auto;
        box-shadow: 0 1px 1px rgba(0,0,0,.15);
    }
</style>