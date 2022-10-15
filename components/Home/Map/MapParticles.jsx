/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Canvas, useFrame, useLoader, useThree,
} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core';
import React, {
  Suspense, useEffect, useMemo, useRef,
} from 'react';
// import * as THREE from 'three';
import Random from 'canvas-sketch-util/random';
import { BufferAttribute, DoubleSide, Object3D, TextureLoader, Vector2, Vector4 } from 'three';
// import fragment from '../../Shaders/fragment.glsl';
// import start from '.';


function SpaceDust({ count }) {
  const mesh = useRef();
  const light = useRef();

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i += 1) {
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.01, 0.015) / 2;
      // const x = Random.range(-50, 50);
      // const y = Random.range(-50, 50);
      // const z = Random.range(-50, 50);
      const x = 0;
      const y = 0;
      const z = 0;

      temp.push({
        time, factor, speed, x, y, z,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new Object3D(), []);

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, index) => {
      const {
        factor, speed, x, y, z,
      } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#050505" />
      </instancedMesh>
    </>
  );
}

const Controls = (props) => {
  const { gl, camera } = useThree();
  return <OrbitControls enableZoom={true} enableRotate={false} enablePan={false} args={[camera, gl.domElement]} {...props} />;
};

function BufferPoints({ count = 10000 }) {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    // return new THREE.BufferAttribute(new Float32Array(p), 3);
    return new BufferAttribute(1, 1, 10, 10);
  }, [count]);

  const [img] = useLoader(TextureLoader, ['/backgrounds/mapbase.png']);

  const fragment = `
    uniform float time;
    uniform sampler2D t;
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      gl_FragColor = vec4(vUv, 0., 1.);
      
      vec4 tt = texture2D(t, vUv);
      gl_FragColor = tt;
    }
  `;

  const meshVertexShader = `
    attribute float pindex;
    // attribute vec3 position;
    attribute vec3 offset;
    // attribute vec2 uv;
    attribute float angle;
  
    uniform float time;
    uniform sampler2D uTouch;
    varying vec2 vUv;
    varying vec3 vPosition;

    varying vec2 vPUv;


    float random(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    void main() {
      vUv = uv;

      // particle uv
      vec2 puv = offset.xy / 225344.;
      vPUv = puv;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vPosition = position;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_PointSize = 100. * (1. / - viewPosition.z);
      gl_Position = projectedPosition;

      float rndz = (random(pindex));

      // displacement
      vec3 displaced = offset;

      // touch
      float t = texture2D(uTouch, puv).r;
      displaced.z += t * 20.0 * rndz;
      displaced.x += cos(angle) * t * 20.0 * rndz;
      displaced.y += sin(angle) * t * 20.0 * rndz;
    }
  `;

  const pointsVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(vPosition, 1.);
    gl_PointSize = 100. * (1. / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
  const ext = {
    derivatives: '#extension GL_DES_standard_derivatives : enable',
  };
  const uniforms = useMemo(() => ({
    time: { type: 'f', value: 0 },
    resolution: { type: 'v4', value: new Vector4() },
    uvRate1: {
      value: new Vector2(1, 1),
    },
    t: { type: 't', value: img },
  }));
  const { viewport } = useThree();
  console.log('width', viewport.width);
  return (
    <points scale={viewport.width / 2000} position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1566, 509, 1566, 509]}>
        {/* <bufferAttribute attach="attributes-position" {...points} /> */}
      </planeBufferGeometry>
      <shaderMaterial
        wireframe="true"
        vertexShader={meshVertexShader}
        fragmentShader={fragment}
        extensions={ext}
        side={DoubleSide}
        uniforms={uniforms}

      />
      {/* <pointsMaterial
        size={0.1}
        threshold={0.1}
        color={0xff00ff}
        sizeAttenuation
      /> */}
    </points>
  );
}

function Scene() {
  return (
    <>
      <Controls />
      <pointLight distance={100} intensity={4} color="white" />
      {/* <SpaceDust count={1000} /> */}
      <BufferPoints />
    </>
  );
}

function Particles({className}) {
  useEffect(() => {
    // start();
  }, []);

  return (
    <div
      id="particle-image"
      className={className}
      // data-params-src="https://raw.githubusercontent.com/paxtonfitzpatrick/particle-image/master/params.json"
    >
      <Canvas
        camera={{
          position: [0, 0, 700],
          far: 10000,
          
        }}
        
        
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Particles;
