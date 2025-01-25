import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

const Shape = () => {
    return (
        <>
            <Sphere args={[1, 50, 100]} scale={2.4}>
                <MeshDistortMaterial
                    color="#DB8B9B"
                    attach={"material"}
                    distort={0.5}
                    speed={2} />

            </Sphere>
            {/* <meshStandardMaterial color={"red"} /> */}
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
            {/* <OrbitControls enableZoom={false} /> */}

        </>
    )
}

export default Shape