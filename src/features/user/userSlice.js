import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogIn: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        setSignOut: (state) => {
            state.name = "";
            state.email = "";
        }
    }
});

export const { setLogIn, setSignOut } = userSlice.actions;
export default userSlice.reducer;