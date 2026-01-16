// // src/Components/InteractiveModel.jsx
// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, OrbitControls } from "@react-three/drei";

// const ParticleSphere = () => {
//   const ref = useRef();

//   // ✅ Float32Array – задължително!
//   const positions = useMemo(() => {
//     const count = 400;
//     const arr = new Float32Array(count * 3);

//     for (let i = 0; i < count; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       const r = 2;

//       arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
//       arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//       arr[i * 3 + 2] = r * Math.cos(phi);
//     }

//     return arr;
//   }, []);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     if (ref.current) {
//       ref.current.rotation.y = t * 0.3;
//       ref.current.rotation.x = t * 0.15;
//     }
//   });

//   return (
//     <Points ref={ref} positions={positions}>
//       <PointMaterial
//         transparent
//         color="#7c4dff"
//         size={0.05}
//         sizeAttenuation
//         depthWrite={false}
//       />
//     </Points>
//   );
// };

// const InteractiveModel = () => {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas camera={{ position: [0, 0, 6] }}>
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <ParticleSphere />
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default InteractiveModel;

//________________________________________________________________________________

// // src/Components/InteractiveModel.jsx
// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, OrbitControls, Text } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";

// const ParticleSphere = ({ onRotateComplete }) => {
//   const ref = useRef();

//   const positions = useMemo(() => {
//     const count = 400;
//     const arr = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       const r = 2;

//       arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
//       arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//       arr[i * 3 + 2] = r * Math.cos(phi);
//     }
//     return arr;
//   }, []);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     if (ref.current) {
//       ref.current.rotation.y = t * 0.3;
//       ref.current.rotation.x = t * 0.15;

//       // Пример: ако се завърти достатъчно (y > 5), извикай callback
//       if (onRotateComplete && t > 5) {
//         onRotateComplete();
//       }
//     }
//   });

//   return (
//     <Points ref={ref} positions={positions}>
//       <PointMaterial
//         transparent
//         color="#7c4dff"
//         size={0.05}
//         sizeAttenuation
//         depthWrite={false}
//       />
//       {/* Текст „Projects“ в средата на сферата */}
//       <Text
//         position={[0, 0, 0]}
//         fontSize={0.5}
//         color="#00ffea"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Projects
//       </Text>
//     </Points>
//   );
// };

// const InteractiveModel = () => {
//   const navigate = useNavigate();

//   const handleRotateComplete = () => {
//     navigate("/projects"); // отвори Projects.jsx страница
//   };

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       {/* Заглавие над сферата */}
//       <h2
//         style={{
//           textAlign: "center",
//           color: "#00ffea",
//           marginBottom: "10px",
//           fontFamily: "Roboto, sans-serif",
//         }}
//       >
//         Turn the Ball
//       </h2>

//       <Canvas camera={{ position: [0, 0, 6] }}>
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <ParticleSphere onRotateComplete={handleRotateComplete} />
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default InteractiveModel;
//________________________________________________________________________________

// src/Components/InteractiveModel.jsx
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const ParticleSphere = ({ onUserRotate }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 400;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 2;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  // леко автоматично въртене (визуално)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="#7c4dff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />

      {/* Текст в топката */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#00ffea"
        anchorX="center"
        anchorY="middle"
      >
        Projects
      </Text>
    </Points>
  );
};

const InteractiveModel = () => {
  const navigate = useNavigate();
  const [hasRotated, setHasRotated] = useState(false);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Надпис над топката */}
      <h2
        style={{
          textAlign: "center",
          color: "#00ffea",
          marginBottom: "10px",
        }}
      >
        Turn the Ball
      </h2>

      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <ParticleSphere />

        <OrbitControls
          enableZoom={false}
          onStart={() => setHasRotated(true)} // започнал drag
          onEnd={() => {
            if (hasRotated) {
              navigate("/projects"); // ✅ САМО при ръчно въртене
            }
          }}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveModel;
