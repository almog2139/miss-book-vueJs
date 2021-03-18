import userService from '@/services/userService.js';
import { Utils } from '@/services/utilsService.js';
export default {
    state: {
        user: null

    },
    getters: {

        // getUser(state) {
        //     return state.user
        // }
        getUser(state) {
            return JSON.parse(JSON.stringify(state.user))
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },

    },
    actions: {
        async loadUser(context) {
            const user = await userService.getUser()
            console.log('userr',user);
             return user
            // context.commit({ type: 'setUser', user })
        },
         saveUser({ commit }, { user }) {
            console.log('here module',user);
            userService.onChangeUser(user)
            // context.commit({ type: 'setUser', user})
        },

    },
   
}