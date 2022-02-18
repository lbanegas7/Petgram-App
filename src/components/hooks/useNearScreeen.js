import { useEffect, useRef, useState } from 'react'

export const useNearScreeen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        // console.log(isIntersecting, entries)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
