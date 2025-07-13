import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'

const FadingDiv = ({children}) => {
    const {ref, inView} = useInView({
        threshold: 0.7,
        triggerOnce: false,
    })
    useEffect(() => {
        if(inView) console.log("Fading div in view")
    })
  return (
    <div ref={ref} className={`flex flex-col items-center transition-all duration-500 ease-in transform ${inView ? "scale-100 opacity-100 translate-2" : "scale-98 opacity-20 translate-0"}`}>
      {children}
    </div>
  )
}

export default FadingDiv
