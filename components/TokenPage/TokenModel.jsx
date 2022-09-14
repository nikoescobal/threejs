/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import {
  useRef, Suspense, useMemo, useLayoutEffect,
  useState, useEffect,
} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Canvas, useLoader, useFrame, useThree,
} from '@react-three/fiber';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { useMediaQuery } from '@mui/material';
import styles from './tokenmodel.module.scss';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Token() {
  const ref = useRef();
  // const gltf = useLoader(GLTFLoader, '/3d/ln_token_3d.gltf');
  // const gltf = useLoader(GLTFLoader, '/3d/Token_Updated.glb');
  const gltf = useLoader(GLTFLoader, '/3d/Token_Updated-small.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
    loader.setDRACOLoader(dracoLoader);
   });
  const clonedScene = useMemo(() => gltf.scene.clone(), []);

  useLayoutEffect(() => {
    clonedScene.traverse((o) => {
      if (o.type === 'Mesh') {
        o.material = new MeshPhysicalMaterial(
          {
            color: 0x1e4fbc,
            roughness: 0.25,
            metalness: 1.25,
            sheenColor: 0x1e4fbc,
            sheen: 0.5,
            ior: 1.45,
            specularColor: 0xffffff,
            specularIntensity: 0.5,
            emissive: 0x1e4fbc,
            emissiveIntensity: 0.5
          },
        );
      }
    });
  }, [clonedScene]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
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
    <primitive scale={scale} ref={ref} object={clonedScene} position={[0, 0, 0]} />
  );
}

function Scene() {
  return (
    <>
      {/* <ambientLight intensity={1} />
      <pointLight intensity={5} color={0xeeeeee} position={[30, 30, 10]} />
      <pointLight intensity={5} position={[-30, 30, -15]} /> */}
      <directionalLight intensity={1} position={[5, 2, 5]} scale={0.5}/>
      <directionalLight intensity={1} position={[-20, 2, -1]} scale={0.5} />
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