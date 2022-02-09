/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/forest_website.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0.geometry} material={materials.map_1blinn6SG} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.map_1lambert4SG} />
        <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
        <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.map_1lambert5SG} />
      </group>
      <group position={[-16.71, -1, -2.91]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0001.geometry} material={materials['map_1blinn6SG.001']} />
        <mesh geometry={nodes.Mesh_1001.geometry} material={materials['map_1lambert4SG.001']} />
        <mesh geometry={nodes.Mesh_2001.geometry} material={nodes.Mesh_2001.material} />
        <mesh geometry={nodes.Mesh_3001.geometry} material={nodes.Mesh_3001.material} />
        <mesh geometry={nodes.Mesh_4001.geometry} material={materials['map_1lambert5SG.001']} />
      </group>
      <group position={[16.47, -1.49, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0002.geometry} material={materials['map_1blinn6SG.002']} />
        <mesh geometry={nodes.Mesh_1002.geometry} material={materials['map_1lambert4SG.002']} />
        <mesh geometry={nodes.Mesh_2002.geometry} material={nodes.Mesh_2002.material} />
        <mesh geometry={nodes.Mesh_3002.geometry} material={nodes.Mesh_3002.material} />
        <mesh geometry={nodes.Mesh_4002.geometry} material={materials['map_1lambert5SG.002']} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.91}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={500}>
            <mesh
              geometry={nodes.Sphere_Material001_0.geometry}
              material={materials['Material.001']}
              scale={[0.11, 0.11, 0.11]}
            />
          </group>
        </group>
      </group>
      <group name="Camera" rotation={[1.72, -1.37, 0.15]}>
        <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/forest_website.glb')