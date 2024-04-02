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
        // creiamo il toggle per passare done a true o false
        DoneTrueFalse(id) {
            // ritorniamo l'id in una costante 
            const idTDL = this.toDoList.find((el) => {
                return el.id === id;
            })
            // generiamo il toggle
            if(idTDL) {
                idTDL.done = !idTDL.done;
            }            
        },

        // inseriamo un metodo per eliminare l'elemento selezionato dalla lista
        deleteElement(id) {
            // prendiamo l'idice dell'elemento
            const index = this.toDoList.findIndex((el) => el.id === id);
            // rimuoviamo l'elemento
            if(index !== -1) {
                this.toDoList.splice(index, 1);
            }
        }
    },

    mounted() {
        console.log(this.toDoList)
    } //lifecycle hook, inseriamo un console.log per controllare se this.toDoList funziona
}).mount('#app')

