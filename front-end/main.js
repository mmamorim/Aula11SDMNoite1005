import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

import topo from "./components/topo.js"
import corpo from "./components/corpo.js"


createApp({
    components: {
        topo, corpo  
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}).mount('#app')