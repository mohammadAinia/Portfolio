
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'


const Test3d = () => {
    return (
        <>
            <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Canvas>
                    <mesh>
                        <Sphere args={[1, 50, 100]} scale={2}>
                            <MeshDistortMaterial color={"red"} attach={"material"} distort={0.5} speed={2} />

                        </Sphere>
                        {/* <meshStandardMaterial color={"red"} /> */}
                        <ambientLight intensity={2} />
                        <directionalLight position={[0, 0, 5]} />
                        {/* <OrbitControls enableZoom={false} /> */}

                    </mesh>
                </Canvas>
            </section>
        </>
    )
}

export default Test3d