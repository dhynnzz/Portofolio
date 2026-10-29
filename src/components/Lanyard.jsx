/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef, useState, Component } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

import cardGLB from "../assets/lanyard/card.glb";
import defaultBandImg from "../assets/lanyard/lanyard1.png";
import defaultFrontImg from "../assets/lanyard/lanyard-front.png";
const defaultBackImg = "/images/lanyard-back-aminuddin.webp";

// Three.js and meshline setup
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

// Error Boundary for WebGL/3D
class LanyardErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Lanyard 3D Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      const fallbackImg = this.props.fallbackImage || defaultFrontImg;
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-[#08182b]/90 border-3 border-onepiece-gold shadow-[4px_4px_0px_#111827] rounded-xl max-w-sm text-center backdrop-blur">
          <img
            src={fallbackImg}
            alt="Mhmd Aminuddin ID Card"
            className="w-56 h-auto rounded-lg shadow-xl border-2 border-onepiece-gold mb-3"
          />
          <p className="font-adventure text-xs text-amber-200 font-bold mb-2">
            3D Card Interactive Mode
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-3 py-1.5 bg-onepiece-gold text-onepiece-dark font-adventure text-xs font-bold border-2 border-onepiece-dark shadow-[2px_2px_0px_#000] hover:scale-105 transition-transform"
          >
            Muat Ulang 3D
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0, 24],
  gravity = [0, -60, 0],
  fov = 20,
  transparent = true,
  frontImage = defaultFrontImg,
  backImage = defaultBackImg,
  imageFit = "cover",
  lanyardImage = defaultBandImg,
  lanyardWidth = 1,
  cardScale = 2.25,
  cardAspectScaleX = 0.925,
  anchorY = 4.2,
  segmentLength = 1,
  extraStrapLength = 0,
  repeat = [-1, 1],
}) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-pause 3D Canvas rendering and Rapier physics when modal is open to eliminate modal lag
  useEffect(() => {
    const checkModal = () => {
      const hasModal =
        document.body.classList.contains("modal-open") ||
        document.body.style.overflow === "hidden";
      setIsModalOpen(Boolean(hasModal));
    };

    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    checkModal();
    return () => observer.disconnect();
  }, []);

  // Auto-pause 3D Canvas rendering and Rapier physics when out of viewport to eliminate scroll lag
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "180px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LanyardErrorBoundary fallbackImage={frontImage}>
      <div
        ref={containerRef}
        className="relative z-50 w-full h-full flex justify-center items-center pointer-events-auto overflow-visible touch-pan-y"
      >
        <Canvas
          frameloop={isInView && !isModalOpen ? "always" : "never"}
          camera={{
            position: isMobile
              ? [position[0], 0.38, 20.3]
              : position,
            fov: fov,
          }}
          dpr={[1, isMobile ? 1.2 : 1.5]}
          gl={{
            alpha: transparent,
            antialias: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          style={{ overflow: "visible" }}
          onCreated={({ gl }) =>
            gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
          }
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 8]} intensity={1.3} />
          <directionalLight position={[-5, -4, 5]} intensity={0.6} />
          <pointLight position={[0, 1, 6]} intensity={0.7} />
          <Suspense fallback={null}>
            <Physics gravity={gravity} timeStep={1 / 60}>
              <Band
                isMobile={isMobile}
                frontImage={frontImage}
                backImage={backImage}
                imageFit={imageFit}
                lanyardImage={lanyardImage}
                lanyardWidth={lanyardWidth}
                cardScale={cardScale}
                cardAspectScaleX={cardAspectScaleX}
                anchorY={anchorY}
                segmentLength={segmentLength}
                extraStrapLength={extraStrapLength}
                repeat={repeat}
              />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
    </LanyardErrorBoundary>
  );
}

const vec = new THREE.Vector3();
const ang = new THREE.Vector3();
const rot = new THREE.Vector3();
const dir = new THREE.Vector3();

const segmentProps = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 4,
  linearDamping: 3,
};

function Band({
  maxSpeed = 60,
  minSpeed = 10,
  isMobile = false,
  frontImage = defaultFrontImg,
  backImage = defaultBackImg,
  imageFit = "cover",
  lanyardImage = defaultBandImg,
  lanyardWidth = 1,
  cardScale = 2.25,
  cardAspectScaleX = 0.925,
  anchorY = 4.2,
  segmentLength = 1,
  extraStrapLength = 0,
  repeat = [-1, 1],
}) {
  const { size } = useThree();
  const currentScale = isMobile ? cardScale * 1.13 : cardScale * 0.96;
  // Proporsi sumbu X: kalibrasi khusus mobile (* 0.94) agar wajah tidak gepeng/melebar akibat sudut perspektif kamera
  const currentAspectScaleX = isMobile ? cardAspectScaleX * 0.94 : cardAspectScaleX;
  const currentAnchorY = isMobile ? 4.0 : anchorY;
  const currentExtraStrap = isMobile ? 1.0 : (extraStrapLength > 1.5 ? 1.0 : extraStrapLength);
  const currentLanyardWidth = isMobile ? lanyardWidth * 1.35 : lanyardWidth * 1.06;
  const currentSegmentLength = isMobile ? Math.max(segmentLength * 1.12, 0.78) : Math.max(segmentLength, 0.74);
  const currentRepeat = isMobile ? [-1.65, 1] : [-1.55, 1];
  const k = currentScale / 2.25;

  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();

  const { nodes, materials } = useGLTF(cardGLB);

  const texture = useTexture(lanyardImage || defaultBandImg);
  const frontTex = useTexture(frontImage || defaultFrontImg);
  const backTex = useTexture(backImage || defaultBackImg);

  const cardMap = useMemo(() => {
    try {
      const baseMap = materials?.base?.map;
      const baseImg = baseMap?.image;

      // 1024x1024 cocok dengan resolusi UV asli card.glb, menghemat 75% memori & GPU upload time
      const W = 1024;
      const H = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return baseMap || null;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W, H);

      if (baseImg && baseImg.width > 0 && baseImg.height > 0) {
        try {
          ctx.drawImage(baseImg, 0, 0, W, H);
        } catch (e) {
          // ignore bitmap draw errors
        }
      }

      const drawFitted = (tex, rect) => {
        const img = tex?.image || tex;
        if (!img || !img.width || !img.height) return;
        const rx = rect.x * W;
        const ry = rect.y * H;
        const rw = rect.w * W;
        const rh = rect.h * H;
        if (imageFit === "fill") {
          try {
            ctx.drawImage(img, rx, ry, rw, rh);
          } catch (err) {
            // ignore
          }
          return;
        }
        const pick = imageFit === "contain" ? Math.min : Math.max;
        const scale = pick(rw / img.width, rh / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        const dx = rx + (rw - dw) / 2;
        const dy = ry + (rh - dh) / 2;
        ctx.save();
        ctx.beginPath();
        ctx.rect(rx, ry, rw, rh);
        ctx.clip();
        try {
          ctx.drawImage(img, dx, dy, dw, dh);
        } catch (err) {
          // ignore
        }
        ctx.restore();
      };

      if (frontTex) drawFitted(frontTex, FRONT_UV_RECT);
      if (backTex) drawFitted(backTex, BACK_UV_RECT);

      const composite = new THREE.CanvasTexture(canvas);
      composite.colorSpace = THREE.SRGBColorSpace;
      if (baseMap) composite.flipY = baseMap.flipY;
      composite.anisotropy = 4;
      composite.generateMipmaps = true;
      composite.minFilter = THREE.LinearMipmapLinearFilter;
      composite.magFilter = THREE.LinearFilter;
      composite.needsUpdate = true;
      return composite;
    } catch (err) {
      console.warn("cardMap generation error:", err);
      return materials?.base?.map || null;
    }
  }, [imageFit, frontTex, backTex, materials?.base?.map]);

  useEffect(() => {
    return () => {
      if (cardMap && typeof cardMap.dispose === "function") {
        cardMap.dispose();
      }
    };
  }, [cardMap]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  const clipJointY = -1.2 * k + 1.20 * currentScale;
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], currentSegmentLength]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], currentSegmentLength]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], currentSegmentLength]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, clipJointY, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        if (ref.current) {
          if (!ref.current.lerped)
            ref.current.lerped = new THREE.Vector3().copy(
              ref.current.translation()
            );
          const clampedDistance = Math.max(
            0.1,
            Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
          );
          const alpha = Math.min(
            1,
            Math.max(0, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
          );
          ref.current.lerped.lerp(
            ref.current.translation(),
            alpha
          );
        }
      });
      if (j3.current && j2.current?.lerped && j1.current?.lerped && fixed.current) {
        // Hubungkan ujung tali (points[0]) persis ke cincin pengait (clip ring) pada kartu
        vec.set(0, clipJointY, -0.05).applyQuaternion(card.current.rotation()).add(card.current.translation());
        curve.points[0].copy(vec);
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        const pAnchor = fixed.current.translation();
        curve.points[3].copy(pAnchor);
        if (currentExtraStrap > 0) {
          curve.points[4].set(pAnchor.x, pAnchor.y + currentExtraStrap, pAnchor.z);
        } else {
          curve.points[4].copy(pAnchor);
        }
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 24 : 32));
      }
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      if (Math.abs(rot.y) > 0.005 || Math.abs(ang.y) > 0.005) {
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    }
  });

  curve.curveType = "chordal";
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
  }

  if (!nodes?.card) return null;

  return (
    <>
      <group position={[0, currentAnchorY, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.02, -0.25 * currentSegmentLength, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.04, -0.55 * currentSegmentLength, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.06, -0.85 * currentSegmentLength, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0.08, -1.15 * currentSegmentLength, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8 * k * currentAspectScaleX, 1.125 * k, 0.01]} />
          <group
            scale={currentScale}
            position={[0, -1.2 * k, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => (
              e.target.setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            <mesh
              geometry={nodes.card.geometry}
              scale={[currentAspectScaleX, 1, 1]}
            >
              <meshPhysicalMaterial
                map={cardMap || materials?.base?.map}
                map-anisotropy={4}
                clearcoat={0.05}
                clearcoatRoughness={0.8}
                roughness={0.7}
                metalness={0.0}
              />
            </mesh>
            {nodes?.clip?.geometry && (
              <mesh
                geometry={nodes.clip.geometry}
                material={materials?.metal}
                material-roughness={0.3}
                renderOrder={10}
              />
            )}
            {nodes?.clamp?.geometry && (
              <mesh
                geometry={nodes.clamp.geometry}
                material={materials?.metal}
                renderOrder={10}
              />
            )}
          </group>
        </RigidBody>
      </group>
      <mesh ref={band} frustumCulled={false} renderOrder={1}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={size?.width ? [size.width, size.height] : (isMobile ? [1000, 2000] : [1000, 1000])}
          useMap
          map={texture}
          repeat={currentRepeat}
          lineWidth={currentLanyardWidth}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
useTexture.preload(defaultBandImg);
useTexture.preload("/images/lanyard-front-aminuddin.webp");
useTexture.preload("/images/lanyard-back-aminuddin.webp");
