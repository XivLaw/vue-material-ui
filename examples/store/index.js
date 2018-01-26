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
                name: 'Table',
                icon: 'view-list',
                open: false,
                childs: {
                    0: {
                        name: 'Normal Tables',
                        src: '/normal-tables'
                    },
                    1: {
                        name: 'Data Tables',
                        src: '/data-tables'
                    }
                },
                haveChild: true
            },
            4: {
                name: 'Forms 表单元素',
                icon: 'collection-text',
                open: true,
                childs: {
                    0: {
                        name: 'Input 输入框',
                        src: '/input'
                    },
                    1: {
                        name: 'Form Components',
                        src: '/form-components'
                    },
                    2: {
                        name: 'Form Examples',
                        src: '/form-examples'
                    },
                    3: {
                        name: 'Form Validation',
                        src: '/form-validation'
                    }
                },
                haveChild: true
            },
            5: {
                name: 'Buttons',
                src: '/buttons',
                icon: 'crop-16-9',
                open: false,
                haveChild: false
            },
            6: {
                name: 'Alerts',
                src: '/alerts',
                icon: 'comment-more',
                open: false,
                haveChild: false
            },
            7: {
                name: 'Dialogs',
                src: '/dialogs',
                icon: 'comment-text-alt',
                open: false,
                haveChild: false
            },
            8: {
                name: 'User Interface',
                icon: 'swap-alt',
                open: false,
                childs: {
                    0: {
                        name: 'Colors',
                        src: '/colors'
                    },
                    1: {
                        name: 'Box Shadow',
                        src: '/box-shadow'
                    },
                    2: {
                        name: 'Icons',
                        src: '/icons'
                    },
                    3: {
                        name: 'Preloaders',
                        src: 'preloaders'
                    },
                    4: {
                        name: 'Notifications',
                        src: 'notification'
                    },
                    5: {
                        name: 'Components',
                        src: 'components'
                    }
                },
                haveChild: true
            },
        }
    }
})

export default store