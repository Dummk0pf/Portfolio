import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    const {scene, animations  } = useGLTF(birdScene)
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, [])

    useFrame(({clock, camera}) => {
        // update the y position simulate the flight moving in a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // checks if bird reached endpoint relative to camera
        if(birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI;
        }
        else if(birdRef.current.position.x < camera.position.x - 10){
            birdRef.current.rotation.y = 0;
        }

        if(birdRef.current.rotation.y === 0) {
            // forward movement
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        }
        else {
            // reverse movement
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

    return (
        <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird