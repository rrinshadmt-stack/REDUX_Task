const {createStore}=require("redux")

const initialState = {
  todos: [],
  count:0
};

function removetodo(state=initialState,action){
    switch(action.type){
        case"ADD":
        return{
            ...state,
            todos:[...state.todos,action.payload],
            count:state.todos.length + 1
        }
        case "REMOVE":
        return {
            todos:state.todos.filter(item=>item!==action.payload)
        }
        case "UPDATE_TODO":
  return {
    todos: state.todos.map(item =>
      item === action.payload.old ? action.payload.new : item
    )
  };
        case "CLEAR_ALL":
        return{todos:[]}

            default:
                return state
    }
}
const store = createStore(removetodo)

store.subscribe(()=>{ 
    console.log(store.getState());
    
})
store.dispatch({type: "ADD",payload:"car"})
store.dispatch({type: "ADD",payload:"jeep"})
store.dispatch({type: "ADD",payload:"superCar"})
