/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from '@react-three/drei';
import {
  useRef, Suspense, useMemo, useLayoutEffect,
  useState, useEffect,
} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Canvas, useLoader, useFrame, useThree,
} from '@react-three/fiber';
import { MeshPhysicalMaterial, MeshStandardMaterial, TextureLoader } from 'three';
import { useMediaQuery } from '@mui/material';
import styles from './tokenmodel.module.scss';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Token({baseColor}) {
  const ref = useRef();
  // const gltf = useLoader(GLTFLoader, '/3d/ln_token_3d.gltf');
  // const gltf = useLoader(GLTFLoader, '/3d/Token_Updated.glb');
  // const gltf = useLoader(GLTFLoader, '/3d/Token_Updated-small.glb', loader => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
  //   loader.setDRACOLoader(dracoLoader);
  //  });
  // const clonedScene = useMemo(() => gltf.scene.clone(), []);

  // useLayoutEffect(() => {
  //   clonedScene.traverse((o) => {
  //     if (o.type === 'Mesh') {
  //       o.material = new MeshPhysicalMaterial(
  //         {
  //           color: 0x1e4fbc,
  //           roughness: 0.25,
  //           metalness: 1.25,
  //           sheenColor: 0x1e4fbc,
  //           sheen: 0.5,
  //           ior: 1.45,
  //           specularColor: 0xffffff,
  //           specularIntensity: 0.5,
  //           emissive: 0x1e4fbc,
  //           emissiveIntensity: 0.5
  //         },
  //       );
  //     }
  //   });
  // }, [clonedScene]);

  const { scene, nodes, materials } = useGLTF('/3d/token/coin/token.glb')

  // useLayoutEffect(() => {
  //   Object.assign(materials.Material, {
  //     color: 0x1e4fbc,
  //     //           roughness: 0.25,
  //     //           metalness: 1.25,
  //     //           sheenColor: 0x1e4fbc,
  //     //           sheen: 0.5,
  //     //           ior: 1.45,
  //     //           specularColor: 0xffffff,
  //     //           specularIntensity: 0.5,
  //     //           emissive: 0x1e4fbc,
  //     //           emissiveIntensity: 0.5
  //   })
  // }, [scene])

  const [colorMap, heightMap, metallicMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    '/3d/token/texture/BaseColor.png',
    '/3d/token/texture/Height.png',
    '/3d/token/texture/Metallic.png',
    '/3d/token/texture/Normal.png',
    '/3d/token/texture/Roughness.png',
  ])

  const clonedScene = useMemo(() => scene.clone(), []);

  useLayoutEffect(() => {
    clonedScene.traverse((o) => {
      if (o.type === 'Mesh') {
        o.material = new MeshPhysicalMaterial(
          {
            // color: 0x1e4fbc,
            map: colorMap,
            roughness: roughnessMap,
            metalnessMap: metallicMap,
            normalMap: normalMap,
            bumpMap: heightMap,
            // sheenColor: 0x1e4fbc,
            // sheen: 0.5,
            ior: 1.45,
            specularColor: 0xffffff,
            specularIntensity: 1,
            // emissive: 0x1e4fbc,
            // emissiveIntensity: 1
          },
        );
      }
    });
  }, [clonedScene]);

  useFrame(() => {
    // ref.current.rotation.y += 0.01;
  });
  const { viewport } = useThree();
  const [scale, setScale] = useState();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (isDesktop) {
      setScale(viewport.width / 1.25);
    } else {
      setScale(viewport.width / 180);
    }
  }, [isDesktop]);
  return (
    // <primitive scale={scale} ref={ref} object={clonedScene} position={[0, 0, 0]} />
    <primitive scale={scale} ref={ref} object={clonedScene} position={[0, 0, 0]} />
  );
}

// export function Token(props) {
//   const [colorMap, heightMap, metallicMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
//         '/3d/token/texture/BaseColor.png',
//         '/3d/token/texture/Height.png',
//         '/3d/token/texture/Metallic.png',
//         '/3d/token/texture/Normal.png',
//         '/3d/token/texture/Roughness.png',
//       ])
  
//   const { nodes, materials } = useGLTF("/3d/token/coin/token.glb");
//   return (
//     <group {...props} dispose={null}>
//       <group position={[0, 0, -0.01]} rotation={[0, 0, 0.01]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_10.geometry}
//           material={materials["coin.001"]}
//           position={[-0.3, 0.27, -0.22]}
//           rotation={[0.8, 0.66, 0.72]}
//           scale={1}
//         >
//           <meshPhysicalMaterial bumpMap={heightMap} metalnessMap={metallicMap} normalMap={normalMap} roughnessMap={roughnessMap} map={colorMap} />
//         </mesh>
//       </group>
//     </group>
//   );
// }

useGLTF.preload("/3d/token/coin/token.glb");

function Scene() {
  return (
    <>
      {/* <ambientLight intensity={1} />
      <pointLight intensity={5} color={0xeeeeee} position={[30, 30, 10]} />
      <pointLight intensity={5} position={[-30, 30, -15]} /> */}
      {/* <rectAreaLight width={10} height={10} position={[0, 0, 50]} intensity={30} /> */}
      <directionalLight intensity={1} position={[0, 2, 5]} />
      {/* <directionalLight intensity={0.1} position={[-20, 2, -1]} scale={0.5} /> */}
      <Suspense fallback={null}>
        <Token />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </>
  );
}

function TokenModel() {
  return (
    <div>
      <Canvas
        camera={{
          position: [0, 0, 120],
        }}
        className={`${styles['token_canvas']}`}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default TokenModel