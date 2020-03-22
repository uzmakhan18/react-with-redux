
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionTypes'

const initialData = []

console.log(initialData)

const todoReducer = (state=initialData, action) =>{

    switch(action.type){
        case ADD_TODO:
        return [
           ...state, {
               id : action.id,
               text : action.text,
               completed : false
           }
        ]
        case TOGGLE_TODO :
        return state.map(todo => 
            (todo.id === action.id) ?
            {...todo,completed: !todo.completed} :
            todo
        )


        case REMOVE_TODO :
        const indexNum = parseInt(action.id)
        return state.filter( (todo) => todo.id !== indexNum )
        default :
        return state
    }
}

export default todoReducer;