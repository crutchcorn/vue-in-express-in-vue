import { createSSRApp } from 'vue'
import { useSelector, useDispatch, provideStoreToApp } from '@reduxjs/vue-redux'
import {increment, store} from "./store.js";

export function createApp() {
    const app = createSSRApp({
        setup: () => {
            const count = useSelector(state => state.counter.value)
            const dispatch = useDispatch()
            const addOneToServer = async () => {
                await fetch('/api/add-one')
            }
            return { count, dispatch, increment, addOneToServer }
        },
        template: `
          <button @click="dispatch(increment())">{{ count }}</button>
          <button @click="addOneToServer()">Add one to server</button>
        `
    })
    provideStoreToApp(app, {store})
    return app
}
