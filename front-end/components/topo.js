

export default {
    template: `
        <div class="text-2xl bg-gray-50 p-3 mb-2">
            {{titulo}}
        </div>
    `,
    data() {
        return {
            // Dados do componente
            titulo: "Teste da API / SERVIDOR"
        }
    },
    mount() {
        // Função chamada sempre que o componente é montado na página
    },
    methods: {

    }
}