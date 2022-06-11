import{createStore} from 'redux';

function stepReducer(currentState = 0,action){
    switch (action.type) {
        case 'Add_Counter':
            return currentState + 1;
        case 'Reset_Counter':
            return currentState = 0;

        default:
            return currentState;
    }
}

export const store = createStore(stepReducer);




