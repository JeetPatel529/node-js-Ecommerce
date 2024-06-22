import { defineStore } from 'pinia'
import { notify } from 'notiwind'

export const useModeStore = defineStore('mode', {
    state: () => {
        return {
            darkMode: JSON.parse(localStorage.getItem('darkMode')) || false
        }
    },
    actions: {
        applyThemeMode() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        toggleMode() {
            this.darkMode = !this.darkMode

            this.applyThemeMode()

            localStorage.setItem('darkMode', JSON.stringify(this.darkMode))

            notify(
                {
                    group: 'foo',
                    title: `Successfully changed to ${this.darkMode ? 'Dark' : 'Light'} Mode`
                },
                1500
            )
        }
    }
})
