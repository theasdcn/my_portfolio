import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

export function ThreeCanvasHero() {
  const mountRef = useRef(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // 1. SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightRed = new THREE.PointLight(0xc41e3a, 3, 50);
    pointLightRed.position.set(5, 5, 5);
    scene.add(pointLightRed);

    const pointLightCream = new THREE.PointLight(0xffebd9, 2, 50);
    pointLightCream.position.set(-5, -5, 5);
    scene.add(pointLightCream);

    // 3. 3D VINYL DISC MODEL
    const vinylGroup = new THREE.Group();

    // Disc Body
    const discGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.05, 64);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x111113,
      roughness: 0.2,
      metalness: 0.9,
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.rotation.x = Math.PI / 2;
    vinylGroup.add(discMesh);

    // Disc Label Center
    const labelGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.06, 32);
    const labelMat = new THREE.MeshStandardMaterial({
      color: 0xc41e3a,
      roughness: 0.4,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.rotation.x = Math.PI / 2;
    vinylGroup.add(labelMesh);

    // Center Spindle Hole
    const holeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const holeMesh = new THREE.Mesh(holeGeo, holeMat);
    holeMesh.rotation.x = Math.PI / 2;
    vinylGroup.add(holeMesh);

    vinylGroup.position.set(-3.2, 1.2, -1);
    scene.add(vinylGroup);

    // 4. FLOATING 3D CHROME STARBURST OBJECTS
    const starsGroup = new THREE.Group();
    const starGeo = new THREE.OctahedronGeometry(0.25, 0);
    const starMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.05,
    });

    const starPositions = [
      [3.5, 2.2, 1],
      [-3.8, -2.2, 0.5],
      [4.2, -1.8, -0.5],
      [-2.5, 2.8, -1.5],
      [2.2, -2.8, 1.5]
    ];

    const starMeshes = starPositions.map(([x, y, z]) => {
      const star = new THREE.Mesh(starGeo, starMat);
      star.position.set(x, y, z);
      starsGroup.add(star);
      return star;
    });

    scene.add(starsGroup);

    // 5. ANIMATION LOOP
    let animationId;
    let targetRotX = 0;
    let targetRotY = 0;

    const render = () => {
      // Continuous Vinyl Rotation
      vinylGroup.rotation.z += 0.015;
      vinylGroup.rotation.x = Math.PI / 3.5 + Math.sin(Date.now() * 0.001) * 0.1;

      // Float stars
      starMeshes.forEach((star, index) => {
        star.rotation.x += 0.01 + index * 0.002;
        star.rotation.y += 0.015;
        star.position.y += Math.sin(Date.now() * 0.002 + index) * 0.003;
      });

      // Mouse Parallax Inertia
      targetRotX += (mouse.normalizedY * 0.3 - targetRotX) * 0.05;
      targetRotY += (mouse.normalizedX * 0.5 - targetRotY) * 0.05;

      scene.rotation.x = targetRotX;
      scene.rotation.y = targetRotY;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(render);
    };

    render();

    // 6. RESIZE HANDLER
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mouse]);

  return <div ref={mountRef} className="three-canvas-hero-wrapper" />;
}
