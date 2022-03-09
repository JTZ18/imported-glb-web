/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,  useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations, useScroll, useMatcapTexture } from '@react-three/drei'

export default function ModelGecko({ ...props }) {
  const [vec] = useState(() => new THREE.Vector3())
  const group = useRef()
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF('/Theo_noBG_08.glb')
  const { actions } = useAnimations(animations, group)
  console.log(scroll);

  const material3 = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0,
    metalness: 0.377,
    envMapIntensity: 0.5,
  })

  const material2 = new THREE.MeshPhongMaterial({
    color:"black",
    emissive: "black",
    specular: "#3d0f00",
    shininess: 56.7,
  })

  useEffect(() => void (actions["All Animations"].play().paused = true), [])
  useFrame((state, delta) => {
  const action = actions["All Animations"]
  // // The offset is between 0 and 1, you can apply it to your models any way you like, add 1 - scroll.offset to change direction
  const offset = scroll.offset
  action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset, 100, delta)
  //console.log(action.time);
  //console.log(state.camera.position);
  // actions["All Animations"].time = THREE.MathUtils.lerp(actions["All Animations"].time, actions["All Animations"].getClip().duration * scroll.current, 0.05)
  // state.camera.position.lerp(vec.set(state.mouse.x * 0.05, state.mouse.y * 0.05, 0), 0.01)
  
 })
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod"
        position={[0, -0.01, 0]}>
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_jade"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_jade.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_vine"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_vine.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_rope01"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_rope01.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_rope02"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_rope02.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_pullen"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_pullen.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_ropetail"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_ropetail.geometry
          }
          material={
            material2
          }
        />
        <mesh
          name="mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_flower"
          castShadow
          receiveShadow
          geometry={
            nodes.mum_rpmlet_midres_rig_mastermum_rpmlet_hires_mod_mastermum_rpmlet_85cm_hires_mod_flower.geometry
          }
          material={
            material2
          }
        />
      </group>
      <group name="theo_dad_root" position={[0, 0, -0.37]}>
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_gum_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_gum_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth01_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth01_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth02_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth02_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth03_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth03_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth04_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth04_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth05_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth05_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth06_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth06_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth07_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth07_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth08_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth08_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth09_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth09_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth10_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth10_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth11_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth11_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth12_up"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth12_up.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_gum_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_gum_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth01_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth01_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth02_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth02_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth03_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth03_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth04_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth04_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth05_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth05_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth06_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth06_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth07_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth07_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth08_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth08_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth09_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth09_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth10_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth10_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth11_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth11_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_teeth_tooth12_dwn"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_teeth_tooth12_dwn.geometry}
          material={material2}
        />
        <mesh
          name="Teethdad_hires_mod_mouth_tongue"
          castShadow
          receiveShadow
          geometry={nodes.Teethdad_hires_mod_mouth_tongue.geometry}
          material={material2}
        />
        <mesh
          name="theo_dad_hat_01"
          castShadow
          receiveShadow
          geometry={nodes.theo_dad_hat_01.geometry}
          material={material2}
        />
        <mesh
          name="theo_dad_hat_05"
          castShadow
          receiveShadow
          geometry={nodes.theo_dad_hat_05.geometry}
          material={material2}
        />
        <mesh
          name="theo_dad_hat_06"
          castShadow
          receiveShadow
          geometry={nodes.theo_dad_hat_06.geometry}
          material={material2}
        />
        <mesh
          name="theo_dad_hat_07"
          castShadow
          receiveShadow
          geometry={nodes.theo_dad_hat_07.geometry}
          material={material2}
        />
        <mesh
          name="theo_dad_hat_02"
          castShadow
          receiveShadow
          geometry={nodes.theo_dad_hat_02.geometry}
          material={material2}
        />
        <group name="theo_dad_cape" position={[0.09, 0, 0.4]} rotation={[-0.47, 0.21, 0.63]}>
          <mesh
            name="theo_dad_cloak_01"
            castShadow
            receiveShadow
            geometry={nodes.theo_dad_cloak_01.geometry}
            material={material2}
          />
        </group>
      </group>
      <PerspectiveCamera
        name="camera2"
        makeDefault={true}
        far={10000}
        near={0.0001}
        fov={81.2}
        position={[-0.34, 0.1, 0.02]}
        rotation={[-Math.PI / 2, -0.82, -Math.PI / 2]}
      />
      <mesh
        name="Cape6"
        castShadow
        receiveShadow
        geometry={nodes.Cape6.geometry}
        material={material2}
        position={[0, 0.09, -0.03]}
        scale={4.53}
      />
      <mesh
        name="Theo3_Theo_Legs13"
        castShadow
        receiveShadow
        geometry={nodes.Theo3_Theo_Legs13.geometry}
        material={material2}
      />
    </group>
  )
}

useGLTF.preload('/Theo_noBG_08.glb')
