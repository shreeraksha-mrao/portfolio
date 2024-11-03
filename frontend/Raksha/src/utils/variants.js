export const fadeIn = (direction,delay)=>{
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 200 : direction === 'right' ? -200 : 0,
          },
          
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1]
            }
        }
    }
}