import Vue from 'vue'
import Vuex from 'vuex'

import headImg from '@/assets/head.jpg'
import headBg from '@/assets/head-bg.jpg'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        headImg,
        headBg,
        menuData: {
            0: {
                name: 'Home',
                src: '/',
                icon: 'home',
                open: false,
                childs: {},
                haveChild: false
            },
            1: {
                name:'Headers',
                src: '/headers',
                icon: 'view-compact',
                open: false,
                childs: {
                    0: {
                        name: 'Textual menu',
                        src: '/textual-menu'
                    },
                    1: {
                        name: 'Image logo',
                        src: '/image-logo'
                    }
                },
                haveChild: true
            }
        }
    }
})

export default store