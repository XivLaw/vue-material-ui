<template>
        <aside id="sidebar">
            <div class="profile" :style="{backgroundImage: `url(${headBg})`}">
                <span class="profile-img">
                    <img :src="headImg">
                </span>
            </div>
        </aside>
</template>

<script>
    export default {
        name: 'MtSidebar',
        props: {
            headImg: {
                required: true,
                type: String
            },
            headBg: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped lang="less">
    #sidebar{
        position: fixed;
        background: #fff;
        width: 268px;
        height: calc(~"100% - 70px");
        top: 70px;
        left: 0px;
        transition: all;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        z-index: 10;
        overflow-y: auto;
        box-shadow: 0 1px 1px rgba(0,0,0,.15);
        &.sidebar-show{
            left: 0px;
        }
        .profile{
            height: 129px;
            margin-bottom: 5px;
            width: 100%;
            background-size: cover;
            background-position: center;
            .profile-img{
                display: block;
                padding: 12px;
                img{
                    width: 47px;
                    height: 47px;
                    border-radius: 50%;
                    border: 3px solid rgba(0,0,0,.14);
                    box-sizing: content-box;
                }
            }
        }
    }
    @media (max-width: 1279px){
        #sidebar {
            left: -268px;
        }
    }
</style>