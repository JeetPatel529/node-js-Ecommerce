import { defineStore } from 'pinia'

export const useRecoverStore = defineStore('recover', {
    state: () => {
        return {
            recoverID: '',
            recoverItemName: ''
        }
    },
    actions: {
        applyNewItemInRecover(id, name) {
            this.recoverID = id
            this.recoverItemName = name
        },
    }
})
