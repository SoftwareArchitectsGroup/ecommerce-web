export const state = () => ({
    products: [
        {name: "Produto 1", price: "10,00 R$"},
        {name: "Produto 2", price: "11,00 R$"},
        {name: "Produto 3", price: "12,00 R$"},
        {name: "Produto 4", price: "13,00 R$"},
        {name: "Produto 5", price: "14,00 R$"},
    ]
});

export const mutations = {
    add(state, text) {
        state.products.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
};