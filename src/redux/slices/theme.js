import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: 'white',
    project: '',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setProject: (state, action) => {
            state.project = action.payload
        }
    }
})

export const {setProject, setTheme} = themeSlice.actions

export const themeReducer =  themeSlice.reducer