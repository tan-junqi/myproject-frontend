import {createStore} from 'vuex'
import user from "@/store/user";

const store = createStore({
    modules: {
        user: user
    }
})

export default store;