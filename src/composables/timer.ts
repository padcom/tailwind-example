import { ref, computed } from 'vue'

export function useTimer() {
  console.log('useTimer')

  const timer = ref(0)

  function start(callback: TimerHandler, interval: number = 500) {
    if (timer.value) throw new Error('Timer is already running')
    timer.value = setInterval(callback, interval)
  }

  function stop() {
    if (!timer.value) throw new Error('Timer not running')
    clearInterval(timer.value)
    timer.value = 0
  }

  const running = computed(() => timer.value !== 0)

  return { start, stop, running }
}
