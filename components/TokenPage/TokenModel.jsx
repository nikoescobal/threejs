/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF, useTexture, Environment } from '@react-three/drei';
import {
  useRef, Suspense, useMemo, useLayoutEffect,
  useState, useEffect,
} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Canvas, useLoader, useFrame, useThree,
} from '@react-three/fiber';
import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  TextureLoader,
  CubeCamera,
  CubeTextureLoader,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
 } from 'three';
import { useMediaQuery } from '@mui/material';
import styles from './tokenmodel.module.scss';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => controls.current.update());

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
      enablePan={false}
    />
  )
}

function Token() {
  const { scene, gl } = useThree();
  const ref = useRef();
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  })

  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0)
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene))
  
  // const gltf = useLoader(GLTFLoader, '/3d/newtoken/coin.glb');
  const { materials, scene: objScene } = useLoader(GLTFLoader, '/3d/newtoken/coin.glb');
  // const clonedScene = useMemo(() => gltf.scene.clone(), []);
  const { viewport } = useThree();
  const [scale, setScale] = useState();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [colorMap] = useLoader(TextureLoader, [
    '/3d/newtoken/BaseColor.png'
  ])

  useLayoutEffect(() => {
    if (materials && scene) {
      // Object.assign(materials.Material, {
      //   map: colorMap,
      //   envMap: cubeCamera.renderTarget.texture 
      // })
      
    }
  }, [scene, materials])

  useEffect(() => {
    if (isDesktop) {
      setScale(viewport.width / 1.25);
    } else {
      setScale(viewport.width / 180);
    }
  }, [isDesktop]);

  // useMemo(() => {
  //   for (const material in materials) {
  //     // iterate the materials
  //     if (Object.prototype.hasOwnProperty.call(materials, material)) {
  //       // change the color of all the materials (there's only one in this model)
  //       // materials[material].color.set("#bb6f3e");
        
  //       // you can also change the color of a specific material if you know the name of the material
  //     }
  //   }
  // }, [materials]);


  
  // const { nodes, materials } = useGLTF("/3d/newtoken/coin.glb");
  // console.log('nodes', nodes);
  // console.log('gltf', gltf);
  return (
  //   <group dispose={null}>
  //   <group position={[0, 0, -0.01]} rotation={[0, 0, 0.01]}>
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.Cube_10.geometry}
  //       material={materials["coin.001"]}
  //       // material-color="#1e4fbc"
  //       position={[0,0,0]}
  //       rotation={[0.8, 0.66, 0.72]}
  //       scale={0.8}
  //     >
  //       {/* <meshPhysicalMaterial  /> */}
  //       </mesh>
  //   </group>
  // </group>


    <primitive scale={scale} ref={ref} object={objScene} position={[0, 0, 0]} />
  );
}

useGLTF.preload("/3d/newtoken/coin.glb");

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    '/3d/skybox/1.jpg',
    '/3d/skybox/2.jpg',
    '/3d/skybox/3.jpg',
    '/3d/skybox/4.jpg',
    '/3d/skybox/5.jpg',
    '/3d/skybox/6.jpg',
    // "https://6izyu.csb.app/4b.jpg",
    // "https://6izyu.csb.app/3.jpg",
    // "https://6izyu.csb.app/4b.jpg",
    // "https://6izyu.csb.app/4.jpg",
    // "https://6izyu.csb.app/5.jpg",
    // "https://6izyu.csb.app/2.jpg",
  ]);
  scene.background = texture;
  return null
}


function Scene() {
  return (
    <>
      {/* <ambientLight intensity={1} />
      <pointLight intensity={5} color={0xeeeeee} position={[30, 30, 10]} />
      <pointLight intensity={5} position={[-30, 30, -15]} /> */}
      {/* <directionalLight intensity={1} position={[5, 2, 5]} scale={0.5}/>
      <directionalLight intensity={1} position={[-20, 2, -1]} scale={0.5} /> */}
      <Suspense fallback={null}>
        <Token />
      </Suspense>
      {/* <SkyBox /> */}
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
        {/* <Scene /> */}
      <ambientLight intensity={1} />

        {/* <directionalLight intensity={1} position={[5, 2, 5]} scale={0.5}/>
      <directionalLight intensity={1} position={[-20, 2, -1]} scale={0.5} /> */}
        <CameraControls />
        <Token />
        <Environment
          // preset='studio'
          files={'/3d/env/studio2.hdr'}
          // path={'/3d/env/'}
        />
        {/* <SkyBox /> */}
      </Canvas>
    </div>
  )
}

export default TokenModel