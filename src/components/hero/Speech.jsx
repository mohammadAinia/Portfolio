import { TypeAnimation } from "react-type-animation"
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{
        duration: 1
      }}
      className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            'Committed to continuous learning and improvement to deliver high-quality, scalable applications.',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Transforming ideas into responsive, dynamic web applications that are both functional and beautiful.',
            1000,
            'Building innovative and user-friendly web applications with React, Node.js, and Laravel.',
            1000,

          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="man.png" />
    </motion.div>
  )
}

export default Speech