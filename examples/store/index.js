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
                name: 'Headers',
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
            },
            2: {
                name: 'Typography',
                src: '/typography',
                icon: 'format-underlined',
                open: false,
                childs: {},
                haveChild: false
            },
            3: {
                name: 'Widgets',
                icon: 'widgets',
                open: false,
                childs: {
                    0: {
                        name: 'Templates',
                        src: '/templates'
                    },
                    1: {
                        name: 'Widgets',
                        src: '/image-logo'
                    }
                },
                haveChild: true
            },
            4: {
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
            5: {
                name: 'Forms',
                icon: 'collection-text',
                open: false,
                childs: {
                    0: {
                        name: 'Basic Form Elements',
                        src: '/basic-form-elements'
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
            6: {
                name: 'Buttons',
                src: '/buttons',
                icon: 'crop-16-9',
                open: false,
                childs: {},
                haveChild: false
            },
            7: {
                name: 'Alerts',
                src: '/alerts',
                icon: 'comment-more',
                open: false,
                childs: {},
                haveChild: false
            },
            8: {
                name: 'Dialogs',
                src: '/dialogs',
                icon: 'comment-text-alt',
                open: false,
                childs: {},
                haveChild: false
            },
            9: {
                name: 'User Interface',
                icon: 'swap-alt',
                open: true,
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