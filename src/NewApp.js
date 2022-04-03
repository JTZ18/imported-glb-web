import React, { useState } from 'react';
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { ScrollControls, CameraShake, Sky, Shadow, SpotLight, OrbitControls, useDepthBuffer, useTexture, Stage, Backdrop, useMatcapTexture, MeshReflectorMaterial, Environment, ContactShadows, softShadows, shaderMaterial, Cloud, Loader, useBoxProjectedEnv, Points, PointMaterial } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bounds, GizmoHelper, GizmoViewport, Box } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useAnimatedSprite } from 'use-animated-sprite';
import { WaveMaterial } from './shaders/WaveMaterial'
import './shaders/PortalMaterial'
import './shaders/GlowingRing'
import Fireflies from './components/Fireflies';
import glsl from 'babel-plugin-glsl/macro'
import { MeshStandardMaterial } from 'three';
import WaveVertexShader from './shaders/WaveVertex.glsl'
import Theov4 from './components/Theov4'
import FullScene from './components/Theo_all_06';
import ModelGecko from './components/Theo_noBG_08';
import BowlStage from './components/Bg_bowl';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import { motion } from 'framer-motion';




export default function NewApp() {
  //debugger;
  const [aboutStatus, setAboutStatus] = useState(false)

  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 3] }} gl={{ alpha: false }}>
      {/* <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} /> */}
        <OrbitControls makeDefault far={5000} near={0.001}/>

        <fog attach="fog" args={['#17171b', 0, 7]} /> // from train example
        <color attach="background" args={['#17171b']} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        
        {/* <ambientLight intensity={1.5} /> */}
        {/*  */}
        
        {/* <spotLight position={[5, 0, 5]} intensity={100} penumbra={1} angle={0.33} castShadow color="#0c8cbf" />
        <spotLight position={[10, 10, 5]} angle={0.15} penumbra={1} intensity={100} castShadow shadow-mapSize={[2048, 2048]} color="#0c8cbf" /> */}
        {/* <spotLight position={[0, 1, 0]} angle={0} penumbra={1} intensity={100} castShadow shadow-mapSize={[2048, 2048]} color="#0c8cbf" /> */}
        {/* <BackdropWithShader /> */}
      {/* <directionalLight position={[-10, 0, -5]} intensity={10} color="red" />
        <directionalLight position={[-1, -2, -5]} intensity={10} color="#0c8cbf" /> */}
        {/* <fog attach="fog" args={['#191920', 0, 5]} /> */}
        
      
          
          <ambientLight intensity={1.5} />
          {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
          <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[500, 4000, 0]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        
          <Suspense fallback={null}>
          {/* <spotLight ref={spotlight1} position={[2, 3, -5]} intensity={1} penumbra={1} angle={0.53} lookAt={[0,0,0]}  /> */}
          {/* <spotLight position={[2, 3, 5]} intensity={10} penumbra={1} angle={0.53} lookAt={[0,0,0]} castShadow /> */}
            {/* <Theov4 scale={10} rotation={[0,Math.PI / 2,0]}/> */}
            {/* <Gecko scale={0.1} position={[0, -0.5, 0]}/> */}
            {/* <CurvedPlaneGLB /> */}
            <Fireflies count={100}/>
            {/* <Cloud
              position={[0, 5, 0]}
              opacity={0.3}
              speed={0.4} // Rotation speed
              width={10} // Width of the full cloud
              depth={1} // Z-dir depth
              segments={10} // Number of particles
            /> */}
            {/* <Stage
              contactShadow // Optional: creates a contactshadow underneath the content (default=true)
              shadows // Optional: lights cast shadow (default=true)// Optional: zooms the content in (default=true)
              intensity={1} // Optional: light intensity (default=1)
              environment="city"
   // Optional: environment (default=city) // Optional: rembrandt (default) | portrait | upfront | soft} // Optional: recalculates control target for correctness
            > */}

            <FullScene aboutStatus={aboutStatus} setAboutStatus={setAboutStatus} scale={10}/>
            <spotLight castShadow position={[0, 3, 0]} intensity={10} penumbra={1} angle={0.53} lookAt={[0,0,0]} distance={10} attenuation={1} anglePower={2}  />
            {/* <SpotLight
              distance={5}
              angle={0.15}
              attenuation={5}
              anglePower={5} // Diffuse-cone anglePower (default: 5)
              position={[1, 4, -1]}
            /> */}
            {/* <BowlStage rotation={[0,Math.PI,0]} scale={10}/> */}
            {/* <Backdrop
              floor={5.25} // Stretches the floor segment, 0.25 by default
              segments={20} // Mesh-resolution, 20 by default
              scale={[20,5,1]}
              position={[0,0,-2]}
            > 
              <Shadow
                color="black"
                colorStop={0}
                opacity={0.5}
                fog={false} // Reacts to fog (default=false)
              />
              <meshStandardMaterial color="black" />
              <ContactShadows
                opacity={1}
                width={1}
                height={1}
                blur={1} // Amount of blur (default=1)
                far={10} // Focal distance (default=10)
                resolution={256} // Rendertarget resolution (default=256)
              />
            </Backdrop> */}
            <ScrollControls pages={10} >
              <ModelGecko scale={10}/>
              
            </ScrollControls>
            {/*<mesh rotation={[-Math.PI/2,0,0]} scale={[10,10,10]}>
              <planeGeometry/>
              <MeshReflectorMaterial
                blur={[0, 0]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={0} // How much blur mixes with surface roughness (default = 1)
                mixStrength={1} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                distortion={1} // Amount of distortion based on the distortionMap texture
                 // The red channel of this texture is used as the distortion map. Default is null
                debug={0} /* Depending on the assigned value, one of the following channels is shown:
                  0 = no debug
                  1 = depth channel
                  2 = base channel
                  3 = distortion channel
                  4 = lod channel (based on the roughness)
                
              reflectorOffset={0.2}
              color={"black"} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
              />
            </mesh>*/}
            {/* </Stage> */}

            <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={1024}
              mixBlur={0.2}
              mixStrength={20}
              depthScale={1}
              minDepthThreshold={0.2}
              color="#09090a"
              metalness={0.6}
              roughness={1}
              fog={true}
            />
            </mesh>
            <Environment preset="dawn" />
      
          </Suspense>

          
          
      </Canvas>
      <Loader/>
      
      <About
          variants={containerVariants}
          animate={aboutStatus ? "visible" : "hidden"}>
          <CloseWrapper>
            <CustomClose onClick={() => setAboutStatus(false)}/>
          </CloseWrapper>
          About page
      </About>

      <FAQ
          variants={containerVariants}
          animate={aboutStatus ? "visible" : "hidden"}>
          <CloseWrapper>
                    <CustomClose onClick={() => setAboutStatus(false)}/>
          </CloseWrapper>
          Lorem Ipsum
      </FAQ>
      
    </>
    

    
  )
}

function Gecko({ ...props }) {
  // This hook gives you offets, ranges and other useful things
      const obj = useLoader(OBJLoader,'/TheoPose_Wip02.obj')
      //console.log(obj)
      //console.log(obj.children[0].geometry)
      //debugger;
      const ref = useRef()
      // useFrame((state, delta) => (ref.current.time += delta))
      // useFrame((state, delta) => (ref.current.uTime += delta))
      const material = new THREE.MeshPhongMaterial({color:"lightblue"})
      material.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = {value: 0} 
        shader.uniforms.iResolution = { value: new THREE.Vector3(2560, 581,1) }
        shader.vertexShader = 'uniform float time;\n' + shader.vertexShader;
	      shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          WaveVertexShader
	      );
        materialShader = shader
      }
      const [matcap, url] = useMatcapTexture(
        // short listed list 10,18, 20,33, 46, 58, 71, 90, 150, 159, 325, 337, 389
        33, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
        1024 // size of the texture ( 64, 128, 256, 512, 1024 )
       )
      

      softShadows({
        frustum: 3.75, // Frustum width (default: 3.75) must be a float
        size: 0.005, // World size (default: 0.005) must be a float
        near: 9.5, // Near plane (default: 9.5) must be a float
        samples: 17, // Samples (default: 17) must be a int
        rings: 11, // Rings (default: 11) must be a int
      })

      const material2 = new THREE.MeshPhongMaterial({
        color:"black",
        emissive: "black",
        specular: "#ff4000",
        shininess: 100,

      })
      
      return (
      <mesh geometry={obj.children[0].geometry} material={material2} {...props}>
        {/* <meshMatcapMaterial matcap={matcap} /> */}
        {/* <portalMaterial ref={ref} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
        {/* <glowingRing ref={ref} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
      </mesh>)
  }

function BackdropWithShader() {
  const ref = useRef()
  
  useFrame((state, delta) => (ref.current.uTime += delta))
  //debugger;
  useFrame((state) => {
    //console.log(ref);
  })


  return(
    <Backdrop castShadow floor={2} segments={20} position={[0, -0.5, -3]} scale={[50, 20, 5]}>
        {/* <waveMaterial ref={ref} key={WaveMaterial.key} colorStart="hotpink" colorEnd="rgb(124, 79, 203)" /> */}
        <waveMaterial ref={ref}/>
    </Backdrop>
  )
}

function Smoke() { 
  return(
    <mesh />
  )
}

function CurvedPlane() {
  const ref = useRef()

  const curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( -10, 0, 0 ),
    new THREE.Vector3( -5, 15, 0 ),
    new THREE.Vector3( 20, 15, 0 ),
    new THREE.Vector3( 10, 0, 0 )
  );
  
  const points = curve.getPoints( 50 );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  
  useFrame((state, delta) => (ref.current.uTime += delta))
  //debugger;

  return (
    <mesh geometry={geometry} scale={2}>
      {/* <waveMaterial ref={ref}/> */}
      <meshPhongMaterial color={"#000000"}/>
    </mesh>
  )
}


// sprite sheet animation smoke
//   function Smoke({IconPosition, IconSize, ...props }) {

//     const spriteTexture = useLoader(THREE.TextureLoader, './smoke-sprite-sheetv3.png')
//     const [animator] = useState(() => new PlainAnimator(spriteTexture, 8, 8, 52, 30))
//     useFrame(() => animator.animate())
  
//     return (
//       <mesh position={IconPosition}>
//         <boxGeometry args={IconSize} />
//         <meshStandardMaterial map={spriteTexture} transparent={true} />
//       </mesh>
//     )
// }


function BuildingGLB({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/building.glb')
  //console.log(animations)
  console.log(scene)
  //for shadows
  return <primitive object={scene} {...props} />
}

function CurvedPlaneGLB({...props}) {
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/curvedPlane.glb')
  //console.log(animations)
  console.log(nodes)
  
  const ref = useRef()

  useFrame((state, delta) => (ref.current.uTime += delta))
  return (
    // <mesh name="Plane" geometry={scene.children[0].geometry} scale={10}>
    //   <meshStandardMaterial />
    // </mesh>
    <mesh geometry={nodes.Plane.geometry} scale={[15,4,20]} position={[0,-2,0]}>
      <waveMaterial ref={ref}/>
      {/* <meshStandardMaterial color={"grey"} /> */}
    </mesh>

  )
}

function Gecko4({...props}) {
  const { scene, nodes, animations } = useLoader(GLTFLoader,'/theov4.glb')
  //console.log(animations)
  console.log(nodes)
  
  const ref = useRef()

  // useFrame((state, delta) => (ref.current.uTime += delta))
  return (
    // <mesh name="Plane" geometry={scene.children[0].geometry} scale={10}>
    //   <meshStandardMaterial />
    // </mesh>
    <mesh geometry={nodes.Plane.geometry} scale={[15,4,20]} position={[0,-2,0]}>
      <waveMaterial ref={ref}/>
      {/* <meshStandardMaterial color={"grey"} /> */}
    </mesh>

  )
}





  

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
//useGLTF.preload('/town.glb')
//useFBX.preload('/Room.fbx')
//useGLTF.preload('/isometric-room.glb')
//useGLTF.preload('/building.gltf')
// useGLTF.preload('/building.glb')
// useFBX.preload('/building.fbx')

// css styling for center div
const About = styled(motion.div)`
  position: fixed;
  top: 25%;
  left: 25%;
  color: white;    
  background: rgba(0,0,0,0.7);
  border-radius: 15px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  width: 50vw;
  height: 50vh;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  text-align: start;
`
const FAQ = styled(About)`
`


const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

// handles popup animation
const containerVariants = {
  hidden: { 
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1, type: 'spring', stiffness: 120
    }
  }
}
