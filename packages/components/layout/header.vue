<template>
    <div>
        <header v-show="show">
            <span class="mt-burger"></span>
            <span class="mt-logo">
                <router-link to="/">
                    {{logoStr}}
                </router-link>
            </span>
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
            },
            logoStr: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped>
    header {
        box-shadow: 0 1px 4px rgba(0,0,0,.3);
        min-height: 70px;
        user-select: none;
        position: fixed;
        z-index: 11;
        width: 100%;
        left: 0;
        top: 0;
        padding: 0 20px;
        background-color: #2196F3;
    }
    header>span{
        display: block;
        height: 36px;
        line-height: 36px;
        margin: 17px 0;
    }
    .mt-burger{
        display: none;
    }
    .mt-logo {
        float: left;
        text-transform: uppercase;
        font-size: 16px;
    }
    .mt-logo a{
        color:#FFFFFF;
    }
    @media (max-width: 1279px){
        .hi-trigger {
            display: block;
        }
        .mt-logo {
            margin-left: 10px;
        }
    }
    @media (max-width: 767px){
        .mt-logo {
            display: none;
        }
    }
</style>