import { useEffect, useRef, useState } from 'react'

export const useTimer = (totalTime) => {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(totalTime)
  let timerRef = useRef(null)

  const start = () => {
    timerRef.current = setInterval(() => {
      setSeconds((seconds) => {
        if(seconds>=1){
          return seconds-1
        }
      })
    },1000)
    setIsRunning(true)
  }

  const stop = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
  }

  useEffect(() => {
    // clear interval when component unmount happens
    return () => timerRef && clearInterval(timerRef.current);
  }, []);

  return {
    isRunning,
    start,
    stop,
    seconds,
  }
}

//extend this for timer app
