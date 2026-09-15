import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Reserved for subtle architectural image transitions or material interactions.
// Keep WebGL subordinate to the content. Do not place a permanent 3D object in the hero.
export default function WebGLCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    renderer.render(scene, camera);

    return () => {
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="webgl-canvas" aria-hidden="true" />;
}
