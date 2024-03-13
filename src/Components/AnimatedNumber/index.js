import "./index.css"
import { useSpring, animated } from 'react-spring';


const AnimatedNumber = (props) => {

    const {rs} = props

    const { number } = useSpring({
        from: { number: 0 },
        to: { number: rs },
        config: { duration: 2000 }
      });

    const formattedValue = number.interpolate((val) => val.toLocaleString());

    return(
        <animated.span className="price">
            {formattedValue}
        </animated.span>
    )
}

export default AnimatedNumber