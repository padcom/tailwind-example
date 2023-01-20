import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useTimer } from './timer'

export function useDate(interval: number = 500) {
  const now = ref(new Date());
  const { start, stop } = useTimer()

  onMounted(() => {
    start(() => { now.value = new Date() })
  })

  onBeforeUnmount(stop)

  return { now }
}
