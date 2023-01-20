import { describe, it, expect } from 'vitest'
import { useTimer } from './timer'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('useTimer', async () => {
  it('will trigger', async () => {
    const { start, stop, running } = useTimer()
    start(() => {
      expect(running.value).toEqual(true)
      stop()
    }, 10)
    await sleep(11)
    expect(running.value).toEqual(false)
  })
})
