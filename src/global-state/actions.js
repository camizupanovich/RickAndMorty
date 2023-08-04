import axios from "axios";

export function getCharacters() {
    return async function (dispatch) {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/character', {});
            return dispatch({
                type: 'GET_CHARACTERS',
                payload: response.data
            })
        } catch (error) {
            alert(error.data.message)
        }
    }
}
export function changePage(page, section) {
    return async function (dispatch) {
        try {
            let response = await axios.get(page, {});
            return dispatch({
                type: section,
                payload: response.data
            })
        } catch (error) {
            alert(error.data.message)
        }
    }
}
export function selectCharacter(characterSelected, section) {
    return async function (dispatch) {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${characterSelected}`, {});
            return dispatch({
                type: section,
                payload: response.data
            })
        }catch(error){
            alert(error.data.message)
        }
    }
}
export function removeCharacter(section){
    return ({
        type:section
    })
}
