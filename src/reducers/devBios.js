import {handleActions} from 'redux-actions'
import Developer from '../models/Developer'

const GET_ALL_BIOS = 'Get_ALL_BIOS';
const ADD_BIOS = 'ADD_BIOS';

const devActions ={
    getAllBiosActionCreators : (developers) => ({
        type : GET_ALL_BIOS,
        developers
    }),
    addBioActionCreator : (developer) => ({
        type : ADD_BIOS,
        developer
    }),
    reducer : handleActions({
        [GET_ALL_BIOS] : (state,action) => ({
            ...state,
            developers : action.developers
        }),
        [ADD_BIOS] : (state, action) => ({
            ...state,
            developers: [...state.developers, action.developer]
        })
    },{
        developers: [
            new Developer(1,"Riddhi","Patel","React",2015),
            new Developer(2,"Purav","Patel","Java",2014)
        ]
    })
}

export default devActions;