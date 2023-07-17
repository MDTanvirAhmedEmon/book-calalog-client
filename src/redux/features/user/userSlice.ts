import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/globaltypes";

interface IState {
    user: IUser,
}

const initialState: IState = {
    user: null!
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        removeUser: (state ) => {
            state.user = null!
        },
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;