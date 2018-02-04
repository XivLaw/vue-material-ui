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
                name: 'Home 首页',
                src: '/',
                icon: 'home',
                open: false,
                haveChild: false
            },
            1: {
                name: 'Typography 文字排版',
                src: '/typography',
                icon: 'format-underlined',
                open: false,
                haveChild: false
            },
            2: {
                name: 'Cards 卡片',
                src: '/cards',
                icon: 'widgets',
                open: false,
                haveChild: false
            },
            3: {
                name: 'Forms 表单元素',
                icon: 'collection-text',
                open: true,
                childs: {
                    0: {
                        name: 'Input 输入框',
                        src: '/input'
                    },
                    1: {
                        name: 'Buttons 按钮',
                        src: '/buttons'
                    },
                    2: {
                        name: 'Select 选择菜单',
                        src: '/select'
                    },
                    3: {
                        name: 'Checkbox/Radio 单选/多选',
                        src: '/check'
                    }
                },
                haveChild: true
            },
            4: {
                name: 'Table',
                src: '/table',
                icon: 'view-list',
                open: false,
                haveChild: false
            },
            5: {
                name: 'Alert 警告',
                src: '/alert',
                icon: 'comment-more',
                open: false,
                haveChild: false
            },
            6: {
                name: 'Dialogs 对话框',
                src: '/dialogs',
                icon: 'comment-text-alt',
                open: false,
                haveChild: false
            },
            7: {
                name: 'User Interface',
                icon: 'swap-alt',
                open: true,
                childs: {
                    0: {
                        name: 'Colors 颜色',
                        src: '/colors'
                    },
                    2: {
                        name: 'Icons 图标',
                        src: '/icons'
                    },
                    3: {
                        name: 'Others 其他',
                        src: 'others'
                    }
                },
                haveChild: true
            },
        }
    }
})

export default store