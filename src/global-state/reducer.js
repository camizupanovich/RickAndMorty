const initialState = {
    allCharacters: [],
    paginatorInfo: {},
    characterDetail: {},
    charactersLeft: [],
    charactersRigth: [],
    infoLeft: {},
    infoRigth: {},
    characterLeftSelected: false,
    characterRigthSelected: false,
    loadingChar: true
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        //Estado inicial, obtiene toda la info para ambas secciones
        case 'GET_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload.results,
                charactersLeft: action.payload.results,
                charactersRigth: action.payload.results,
                paginatorInfo: action.payload.info,
                infoLeft: action.payload.info,
                infoRigth: action.payload.info,
                loadingChar: false
            }
        //Cambia el estado de la seccion izquierda
        case 'LEFT':
            return {
                ...state,
                charactersLeft: action.payload.results,
                infoLeft: action.payload.info,
                loadingChar: false
            }
        //cambia el estado de la seccion derecha
        case 'RIGTH':
            return {
                ...state,
                charactersRigth: action.payload.results,
                infoRigth: action.payload.info,
                loadingChar: false
            }
        //selecciona un personaje de la seccion izquierda
        case 'LEFT_CHARACTER_SELECTED':
            return {
                ...state,
                characterLeftSelected: action.payload
            }
        //selecciona un personaje de la seccion derecha
        case 'RIGTH_CHARACTER_SELECTED':
            return {
                ...state,
                characterRigthSelected: action.payload
            }
        case 'ALL_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload.results,
                paginatorInfo: action.payload.info,
                loadingChar: false
            }
        case 'CHARACTER_DETAIL':
            return {
                ...state,
                characterDetail: action.payload
            }
        case 'RIGTH_REMOVE':
            return {
                ...state,
                characterRigthSelected: false
            }
        case 'LEFT_REMOVE':
            return {
                ...state,
                characterLeftSelected: false
            }
        default:
            return state;
    }
}