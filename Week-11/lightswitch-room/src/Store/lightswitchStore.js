import {createStore} from 'redux'


function lightswitchReducer(currentState = true,action){
    
    switch(action.type){
        case 'Toggle':
            return currentState  =  !currentState;
        default:
            return currentState;
    }
}

export const store = createStore(lightswitchReducer);

