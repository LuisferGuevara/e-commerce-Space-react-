const INITIAL_STATE = {
    name: "",
    image: "",
    description: "",
    error: ""
}

const adminReducer = (state = INITIAL_STATE, action) =>{
    const trial = {
        createPlanet__ok:{...state, name:action.payload?.name, image:action.payload?.image, description:action.payload?.description},
        createPlanet__error:{...state, error:action.payload} 
    }
    return trial[action.type] || state
}

export default adminReducer