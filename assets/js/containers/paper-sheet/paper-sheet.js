import React, { useEffect, useLayoutEffect } from "react";

function PaperSheet(props) {
        //     console.log('useLayoutEffect')

    // let ref = useRef(null)
    // let size = useComponentSize(ref)

    // let { width, height } = size

    // useEffect(() => {
    //     console.log('useEffect')
    // }, []);
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, []);
    return (
        <>
            {props.children}
        </>
    )

};
// function getSize(el) {
//     if (!el) {
//         return {
//             width: 0,
//             height: 0
//         }
//     }

//     return {
//         width: el.offsetWidth,
//         height: el.offsetHeight
//     }
// }
// function useComponentSize(ref) {
//     let [ComponentSize, setComponentSize] = useState(
//         getSize(ref ? ref.current : {})
//     )

//     const handleResize = useCallback(
//         function handleResize() {
//             if (ref.current) {
//                 setComponentSize(getSize(ref.current))
//             }
//         },
//         [ref]
//     )

//     useLayoutEffect(
//         () => {
//             if (!ref.current) {
//                 return
//             }

//             handleResize()

//             if (typeof ResizeObserver === 'function') {
//                 let resizeObserver = new ResizeObserver(() => handleResize())
//                 resizeObserver.observe(ref.current)

//                 return () => {
//                     resizeObserver.disconnect(ref.current)
//                     resizeObserver = null
//                 }
//             } else {
//                 window.addEventListener('resize', handleResize)

//                 return () => {
//                     window.removeEventListener('resize', handleResize)
//                 }
//             }
//         },
//         [ref.current]
//     )

//     return ComponentSize
// }
export default PaperSheet