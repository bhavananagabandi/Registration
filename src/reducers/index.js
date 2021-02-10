import { combineReducers } from 'redux';
const initialState = {
    formValues: {}
};

const routePages = (state) => {
    return {
        ...state,
        name: 'Name',
        personalInfo: 'PersonalInfo',
        Address: 'Address',
        Confirmation: 'Confirmation'
    }
}

const formValues = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_VALUES': 
        return {
            ...state,
            formValues: {...state.formValues, ...action.payload}
        }
        default:
            return state;
    }
}

export default combineReducers({
    routes: routePages,
    values: formValues
})