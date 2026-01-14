// // src/Components/InteractiveSphereScene.jsx
// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Points, PointMaterial, Line } from "@react-three/drei";
// import * as THREE from "three";

// const RotatingNodes = () => {
//   const groupRef = useRef();
//   const [nodes] = useState(() =>
//     Array.from({ length: 10 }, () => ({
//       position: [
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4,
//       ],
//     }))
//   );

//   useFrame(() => {
//     groupRef.current.rotation.x += 0.005;
//     groupRef.current.rotation.y += 0.005;
//   });

//   return (
//     <group ref={groupRef}>
//       {nodes.map((node, i) => (
//         <mesh key={i} position={node.position}>
//           <sphereGeometry args={[0.1, 16, 16]} />
//           <meshStandardMaterial color="#7c4dff" />
//         </mesh>
//       ))}

//       {/* Lines connecting nodes */}
//       {nodes.map((node, i) =>
//         nodes.map((other, j) =>
//           i < j ? (
//             <Line
//               key={`${i}-${j}`}
//               points={[node.position, other.position]}
//               color="#00ffea"
//               lineWidth={1}
//             />
//           ) : null
//         )
//       )}
//     </group>
//   );
// };

// const InteractiveSphereScene = () => {
//   return (
//     <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <RotatingNodes />
//       <OrbitControls enableZoom={true} />
//     </Canvas>
//   );
// };

// export default InteractiveSphereScene;
