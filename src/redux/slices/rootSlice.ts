import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        fav_hero: 'Captian test',
        reason: "He's a test"
    },
    reducers: {
        chooseFavHero: (state, action) => { state.fav_hero = action.payload},
        chooseReason: (state, action) => { state.reason = action.payload}
    }
})

// export reducer
export const reducer = rootSlice.reducer;
export const { chooseFavHero, chooseReason} = rootSlice.actions
