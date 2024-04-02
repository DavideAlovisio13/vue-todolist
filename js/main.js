import {toDoList} from './data.js'
// destrutturazione del metodo createApp, mettendola nella variabile vue
const {createApp} = Vue;

// iniziamo ad usare il metodo appena importato, ritornando la mia applicazione e montandola su #app
createApp({ //option object
    data() {
        return {
            toDoList: toDoList,

        }
    },
    methods: { // object methods
        
    },
    mounted() {
        console.log(this.toDoList)
    } //lifecycle hook, inseriamo un console.log per controllare se this.toDoList funziona
}).mount('#app')

