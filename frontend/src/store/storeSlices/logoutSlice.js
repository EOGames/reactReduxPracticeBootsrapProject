import { createSlice } from '@reduxjs/toolkit';

const userMethods = createSlice({
    name: 'userMethods',
    initialState: null,
    reducers: 
    {
        logout:
        {
            logout()
            {
                localStorage.removeItem('session');
                console.log('logout Called');
                window.location.href ='/login';
            }
        }
    }
});
export const {logout} = userMethods.actions;

export default userMethods;