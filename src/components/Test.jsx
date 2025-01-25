import { motion } from 'motion/react'

const Test = () => {
    return (
        <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div
                // initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: [0,100], y: [0,-200], opacity: [0,1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    // delay: 4,
                    repeat: Infinity
                }}
                style={{ width: 300, height: 300, background: "red" }}></motion.div>
        </section   >
    )
}

export default Test