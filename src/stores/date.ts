import { defineStore,  } from 'pinia'

import { useDate } from '@/composables/date'

export const useDateStore = defineStore('date', () => {
  const { now } = useDate()

  function sayHello(this: any, name: string) {
    console.log('this', this)
    console.log('Hello ' + name)
  }

  return { now, sayHello }
})
