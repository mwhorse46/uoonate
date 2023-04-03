export const state = () => ({
	colorthemes: {
        blue : "bluetheme",
        green : "greentheme",
        pink : "pinktheme",
        yellow : "yellowtheme"
    },
	colorIndex: "blue",
})

export const mutations = {
    setColorIndex(state, value){
        state.colorIndex = value
    }
}

export const actions = {
}

export const getters = {
    getColorValue: (state) => { 
        return state.colorthemes[state.colorIndex];
    }
}