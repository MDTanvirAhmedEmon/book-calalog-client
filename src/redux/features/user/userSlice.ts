import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    name: string | null;
    email: string | null;
    password: string | null;
}

const initialState: IUser = {
    name:  null,
    email:  null,
    password:  null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // getSearchValue: (state, action: PayloadAction<string>) => {
            
        // }
    }
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;