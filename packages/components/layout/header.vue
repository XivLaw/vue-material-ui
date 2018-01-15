<template>
    <div>
        <header v-show="show">
            <div class="mt-burger">
                <span class="mt-line-top"></span>
                <span class="mt-line-center"></span>
                <span class="mt-line-bottom"></span>
            </div>
            <div class="mt-logo">
                <router-link to="/">
                    {{logoStr}}
                </router-link>
            </div>
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

<style scoped lang="less">
    header {
        box-shadow: 0 1px 4px rgba(0,0,0,.3);
        min-height: 45px;
        user-select: none;
        position: fixed;
        z-index: 11;
        width: 100%;
        left: 0;
        top: 0;
        padding: 0 20px;
        padding-top: 25px;
        background-color: #2196F3;
        div{
            float: left;
            line-height: 20px;
        }
        .mt-burger{
            position: relative;
            width: 18px;
            margin:4px 20px 0 10px;
            span{
                position: absolute;
                display: block;
                width: 18px;
                height: 2px;
                transition: all;
                -webkit-transition-duration: .3s;
                transition-duration: .3s;
                background-color: #fff;
                &.mt-line-top{
                    top:0px;
                }
                &.mt-line-center{
                    top:5px;
                }
                &.mt-line-bottom{
                    top:10px;
                }
            }
        }
        .mt-logo {
            text-transform: uppercase;
            font-size: 16px;
            a{
                color:#FFFFFF;
            }
        }
    }
    @media all{
        .mt-burger {
            display: none;
        }
    }
    @media (max-width: 1279px){
        .mt-burger {
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