const {createStore, combineReducers}=require("redux")



function countReducer(state = 0,action){

    switch(action.type){
        case "INCREMENT":
            return state + 1;
            
            default:
                return state
    }
}

function todoReducer(state=[],action){
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.payload]

            case "REMOVE":
                return 
            
            default:return state
    }
}

function themeReducer(state="dark",action){
    switch(action.type){
        case "THEME":
            return state=== "dark"?"light":"dark"
            default: 
            return state
}
}
function loginReducer(state = null,action){

    switch(action.type){
        case "LOGIN":
            return  action.payload

            case "LOGOUT":
                return null
            default:
                return state
    }
}


    const rooted = combineReducers({
        count:countReducer,
        theme:themeReducer,
        login:loginReducer,
        todo:todoReducer
    })

        const Store = createStore(rooted)
    Store.subscribe(()=>{
        console.log(Store.getState());
        
    })

    Store.dispatch({ type:"INCREMENT",})
    Store.dispatch({ type:"LOGIN",payload:"arjun"})
    Store.dispatch({ type:"LOGOUT"})
    Store.dispatch({ type:"ADD_TODO",payload:"fhghghgh"})
    Store.dispatch({type:"THEME"})

    

