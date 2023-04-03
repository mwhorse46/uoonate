export const state = () => ({
	products: []
})

export const mutations = {
    setProducts(state, value){
        state.products = value.slice();
        console.log("asdasdasd", state.products)
    }
}

export const actions = {
}