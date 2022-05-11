import api from "../api.js"

export default {
    template: `
        <div class="border p-2 mx-2 rounded">
            Lista de itens
            <div class="border rounded px-2 my-2 bg-gray-100">
                <div class="my-2">
                    <span>ID:</span> <input type="text" v-model="id">
                </div>
                <div class="my-2">
                    <span>Name:</span> <input type="text" v-model="name">
                </div>
                <div class="my-2">
                    <span>Country:</span> <input type="text" v-model="country">
                </div>
                <div class="my-2">
                    <span>Style:</span> <input type="text" v-model="style">
                </div>
                <button @click="reqPOST" class="text-sm border rounded bg-gray-50 px-1 ml-2">
                    <span style="font-size: 9pt;">➕</span>
                    Incluir (POST)
                </button>
                <button @click="reqPut" class="text-sm border rounded bg-gray-50 px-1 ml-2">
                    <span style="font-size: 9pt;">➕</span>
                    Atualizar (PUT)
                </button>
            </div>

            <div class="border rounded px-2 my-2 bg-white">
                <div class="grid grid-cols-8" v-for="(elem,index,key) in lista" :key="key">
                    <div class="col-span-1">
                        <span class="mr-1 font-bold">id:</span>
                        <span>{{elem.id}}</span>
                    </div>
                    <div class="col-span-2">
                        <span class="mx-1 font-bold">name:</span>
                        <span>{{elem.name}}</span>
                    </div>
                    <div class="col-span-2">
                        <span class="mx-1 font-bold">country:</span>
                        <span>{{elem.country}}</span>
                    </div>
                    <div class="col-span-2">
                        <span class="mx-1 font-bold">style:</span>
                        <span>{{elem.style}}</span>
                    </div>
                    <div class="col-span-1">
                        <button @click="atualizar(elem.id)" class="text-xs border rounded bg-red-300 px-1 ml-2">
                            <span style="font-size: 7pt;"></span> atualizar
                        </button>
                        <button @click="reqDELETE(elem.id)" class="text-xs border rounded bg-red-300 px-1 ml-2">
                            <span style="font-size: 7pt;">❌</span> excluir
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            // Dados do componente
            lista: {},
            id: "",
            name: "",
            country: "",
            style: ""
        }
    },
    mounted() {
        // Função chamada sempre que o componente é montado na página
        let self = this;
        api.get("bandas", function (data) {
            self.lista = data;
        });
    },
    methods: {

        reqDELETE(id) {
            console.log(id);
            api.delete("bandas", id, function (data) {
                console.log(data);
            })
        },

        reqPOST() {
            let data = {
                id: this.id,
                name: this.name,
                country: this.country,
                style: this.style
            }
            api.post("bandas", data, function (data) {
                console.log(data);
            })
        },

        atualizar(id) {
            console.log(id);
            let elem = this.lista[id]
            console.log(elem);
            this.id = elem.id;
            this.name = elem.name;
            this.country = elem.country;
            this.style = elem.style;
        },

        reqPut() {
            let data = {
                id: this.id,
                name: this.name,
                country: this.country,
                style: this.style
            }
            api.put("bandas", data, function (data) {
                console.log(data);
            })

        }
    }
}