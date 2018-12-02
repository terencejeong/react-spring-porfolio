import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const Card = () => {
  // Ref added to card element and use on the MouseEvent to get elements offset and dimensions
  const ref = useRef();
  // track whether the card is hovered or not.
  const [isHovered, setHovered] = useState(false);

  // hook from react-spring
  const [animatedProps, setAnimatedProps] = useSpring({
    // array containing rotateX, rotateY and scale values.
    // store in single keu so we can use animatedProps.xys.interpolate() to easily generate
    // the css transform value.
    xys: [0, 0 , 1],
    config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
  });

  return (
   <animated.div
     ref={ref}
     className="card"
     onMouseEnter={() => setHovered(true)}
     onMouseMove={({ clientX, clientY }) => {

       // get mouse X position in Card
       const x = clientX -
         (ref.current.offsetLeft -
          (window.scrollX || window.pageXOffset || document.body.scrollLeft));

       // get mouse Y position in Card
       const y = clientY -
         (ref.current.offsetTop -
           (window.scrollY || window.pageYOffset || document.body.scrollTop));

       // set animation values base on card position and card dimensions
       const dampen = 50 // lower the number the less rotation
       const xys = [
         -(y - ref.current.clientHeight / 2) / dampen, // rotateX
         (x - ref.current.clientWidth / 2) / dampen, // rotateY
         1.07 // Scale
       ];
       // Update values to animate to
       setAnimatedProps({ xys: xys });
     }}
     onMouseLeave={() => {
       setHovered(false);
       // Set xys back to original
       setAnimatedProps({ xys: [0, 0, 1] });
     }}
     style={{
       // If hovered we want it to overlap other cards when it scales up
       zIndex: isHovered ? 2 : 1,
       // Interpolate function to handle css changes
       transform: animatedProps.xys.interpolate(
         (x, y, s) =>
           `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
       )
     }}

   >
     <div>
       stuff
     </div>
     <div>
       some more stuff
     </div>
     <h1>hello there</h1>
   </animated.div>
  )
};

export default Card
