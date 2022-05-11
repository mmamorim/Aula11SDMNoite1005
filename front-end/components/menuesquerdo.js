
export default {
    template: `
        <div> 
            <button @click="clickMenu('bandas')" class="w-full text-xs border rounded bg-gray-50 p-1 mx-1">Bandas (GET)</button>
        </div>
        <div> 
            <button @click="clickMenu('filmes')" class="w-full text-xs border rounded bg-gray-50 p-1 mx-1">Filmes (GET)</button>
        </div>
    `,
    data() {
        return {
            // Dados do componente
        }
    },
    mount() {
        // Função chamada sempre que o componente é montado na página
    },
    methods: {
        
        clickMenu(txt) {
            //console.log(txt);
            this.$emit('menuChange',txt)
        }
    }
}