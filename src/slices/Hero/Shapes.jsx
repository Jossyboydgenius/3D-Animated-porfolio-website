"use client"

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import { Suspense, useRef, useState, useEffect } from "react";
import { func } from "three/examples/jsm/nodes/Nodes.js";


export default function Shapes() {
    return (
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas 
            className="z-0" 
            shadows 
            gl={{ antialias: false }} 
            dpr={[1, 1.5]} 
            camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
            >
            <Suspense fallback={null}>
                <Geometries />
                <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.65}
                scale={40}
                blur={1}
                far={9} 
                />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
        </div>
    )
}
function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.3,
            geometry: new THREE.IcosahedronGeometry(3) // Gem
        },
    ];

    const materials = [
        new THREE.MeshNormalMaterial(),
        new THREE.MeshNormalMaterial({ color: 0x2ecc71, roughness: 0 }),
        new THREE.MeshNormalMaterial({ color: 0xf1c40f, roughness: 0.4 }),
        new THREE.MeshNormalMaterial({ color: 0xe74c3c, roughness: 0.1 }),
        new THREE.MeshNormalMaterial({ color: 0x8e44ad, roughness: 0.1 }),
        new THREE.MeshNormalMaterial({ color: 0x1abc9c, roughness: 0.1 }),
        new THREE.MeshNormalMaterial({
            roughness: 0,
            metalness: 0.5,
            color: 0x2980b9,
        }),
        new THREE.MeshNormalMaterial({
            roughness: 0.1,
            metalness: 0.5,
            color: 0x2c3e50,
        }),
    ];

    return geometries.map(({position, r, geometry})=>(
        <Geometry
        key={JSON.stringify(position)}
        position={position.map((p)=>p*2)}
        geometry={geometry}
        materials={materials}
        r={r}
        />
    ));

}

function Geometry({ r, position, geometry, materials }) {
    const meshRef = useRef();
    const [visible, setVisible] = useState(false);

    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    function handleClick(e) {
        const mesh = e.object;
    
        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
            onComplete: () => {
                mesh.material = getRandomMaterial();
                mesh.material.needsUpdate = true; // Ensure material update is reflected
            },
        });
    }
    

    // function handleClick(e) {
    //     const mesh = e.object;

    //     gsap.to(mesh.rotation,{
    //         x: `+=${gsap.utils.random(0,2)}`,
    //         y: `+=${gsap.utils.random(0,2)}`,
    //         z: `+=${gsap.utils.random(0,2)}`,
    //         duration: 1.3,
    //         ease: "elastic.out(1,0.3)",
    //         yoyo: true,
    //     });
    //     mesh.material = getRandomMaterial();
    // }

    const handlePointerOver = () => {
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    };

    useEffect(() => {
        let isMounted = true;
    
        gsap.from(meshRef.current.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
            ease: "elastic.out(1,0.3)",
            delay: 0.3,
            onComplete: () => {
                if (isMounted) {
                    setVisible(true);
                }
            },
        });
    
        return () => {
            isMounted = false;
        }; // cleanup
    }, []);
    
    

    // useEffect(()=>{
    //     let ctx = gsap.context(() => {
    //         setVisible(true)
    //         gsap.from(meshRef.current.scale,
    //             {
    //                 x:0,
    //                 y:0,
    //                 z:0,
    //                 duration: 1,
    //                 ease: "elastic.out(1,0.3)",
    //                 delay: 0.3,
    //             })
    //     })
    //     return ()=>ctx.revert() //cleanup
    // }, []);
    
    return (
        <group position={position} ref ={meshRef}>
         <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
         <mesh
         geometry={geometry}
         onClick={handleClick}
         onPointerOver={handlePointerOver}
         onPointerOut={handlePointerOut}
         visible={visible}
         material={startingMaterial}
         />
         </Float>
        </group>
    );
}