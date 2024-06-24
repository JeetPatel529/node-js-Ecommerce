import { defineStore } from 'pinia'
import { notify } from 'notiwind'

export const useAlertStore = defineStore('alert', {
    state: () => {
        return {

        }
    },
    actions: {
        fooAlert(message) {
            notify(
                {
                    group: 'foo',
                    title: `${message}`
                },
                2000
            )
        },
    }
})
