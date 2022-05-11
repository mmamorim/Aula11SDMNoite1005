import menuesquerdo from "./menuesquerdo.js"
import listabandas from "./lista-bandas.js"
import listafilmes from "./lista-filmes.js"

export default {
    components: {
        menuesquerdo, listabandas, listafilmes
    },
    template: `
        <div class="grid grid-cols-8">
            <div class="col-span-1 bg-gray-50 p-3">
                <menuesquerdo @menuChange="menuChangeFunc"></menuesquerdo>
            </div>
            <div class="col-span-7">
                <listabandas v-if="rota == 'bandas'"></listabandas>
                <listafilmes v-if="rota == 'filmes'"></listafilmes>
            </div>
        </div>
    `,
    data() {
        return {
            // Dados do componente
            rota: "bandas"
        }
    },
    mount() {
        // Função chamada sempre que o componente é montado na página
    },
    methods: {
        
        menuChangeFunc(txtMenu) {
            console.log(txtMenu);
            this.rota = txtMenu;
        }
    }
}