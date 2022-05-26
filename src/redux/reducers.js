import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], action) => {

    switch(action.type) {
     case 'FETCH_MAKES':
      console.log(action)
      return action.value
     case 'DELETE_MAKES':
      const newState = [...state]
       newState.splice(action.value, 1) 
       console.log('Delete Func', action.value)
       return newState
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes })