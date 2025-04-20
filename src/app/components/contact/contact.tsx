"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Mensaje enviado:", formData);

    alert("¡Mensaje enviado con éxito!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">¡Hablemos!</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              ¿Tienes un proyecto en mente o simplemente quieres saludar?
              Completa el formulario o contáctame a través de los siguientes
              medios.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="mailto:Angelica.bengelsdorff.5@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Angélica,%20me%20gustaría%20ponerme%20en%20contacto..."
                      className="hover:underline text-primary"
                    >
                      Angelica.bengelsdorff.5@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="tel:+543751608480"
                      className="hover:underline text-primary"
                    >
                      +54 3751 608480
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="https://www.linkedin.com/in/angelica-bengelsdorff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      linkedin.com/in/angelica-bengelsdorff
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a
                      href="https://github.com/ABengelsdorff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-primary"
                    >
                      github.com/ABengelsdorff
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario funcional */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu mensaje..."
                />
              </div>

              {/* <a
                href={`mailto:angelica.bengelsdorff.5@gmail.com?subject=Contacto%20de%20${encodeURIComponent(
                  formData.name
                )}&body=Email:%20${encodeURIComponent(
                  formData.email
                )}%0A%0AMensaje:%0A${encodeURIComponent(formData.message)}`}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all text-center block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje por correo
              </a> */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all text-center block"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje por correo"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Linkedin, Github, Phone } from "lucide-react";

// import * as THREE from "three";
// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Html,
//   Environment,
//   useGLTF,
//   ContactShadows,
//   OrbitControls,
// } from "@react-three/drei";
// import HeroPage from "./htmlContact";
// import { GLTF } from "three-stdlib";
// import { JSX } from "react";

// type GLTFResult = GLTF & {
//   nodes: {
//     Cube008: THREE.Mesh;
//     Cube008_1: THREE.Mesh;
//     Cube008_2: THREE.Mesh;
//     keyboard: THREE.Mesh;
//     Cube002: THREE.Mesh;
//     Cube002_1: THREE.Mesh;
//     touchbar: THREE.Mesh;
//   };
//   materials: {
//     aluminium: THREE.Material;
//     "matte.001": THREE.Material;
//     keys: THREE.Material;
//     trackpad: THREE.Material;
//     touchbar: THREE.Material;
//   };
// };

// function Model(props: JSX.IntrinsicElements["group"]) {
//   const group = useRef<THREE.Group>(null);

//   const { nodes, materials } = useGLTF("/mac-draco.glb") as unknown as GLTFResult;

//   // Animamos el modelo con un movimiento flotante suave
//   useFrame((state) => {
//     if (!group.current) return;

//     const t = state.clock.getElapsedTime();
//     group.current.rotation.x = THREE.MathUtils.lerp(
//       group.current.rotation.x,
//       Math.cos(t / 2) / 20 + 0.25,
//       0.1
//     );
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       Math.sin(t / 4) / 20,
//       0.1
//     );
//     group.current.rotation.z = THREE.MathUtils.lerp(
//       group.current.rotation.z,
//       Math.sin(t / 8) / 20,
//       0.1
//     );
//     group.current.position.y = THREE.MathUtils.lerp(
//       group.current.position.y,
//       (-2 + Math.sin(t / 2)) / 2,
//       0.1
//     );
//   });

//   return (
//     <group ref={group} {...props} dispose={null}>
//       {/* Agrupamos la pantalla con su posición y rotación inicial */}
//       <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
//         <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
//           {/* Parte del cuerpo de la laptop */}
//           <mesh
//             material={materials.aluminium}
//             geometry={nodes["Cube008"].geometry}
//           />
//           <mesh
//             material={materials["matte.001"]}
//             geometry={nodes["Cube008_1"].geometry}
//           />

//           {/* Pantalla donde se inserta el HTML interactivo */}
//           <mesh geometry={nodes["Cube008_2"].geometry}>
//             <Html
//               className="content"
//               rotation-x={-Math.PI / 2}
//               position={[-0.53, 0.05, -0.09]}
//               transform
//               occlude
//             >
//               {/* Evita que el HTML capture el movimiento de cámara */}
//               <div
//                 className="wrapper"
//                 style={{ maxWidth: "100%" }} // Ajustamos el tamaño del contenido
//                 onPointerDown={(e) => e.stopPropagation()}
//               >
//                 <HeroPage />{" "}
//                 {/* Este es el componente que muestra tu info personal */}
//               </div>
//             </Html>
//           </mesh>
//         </group>
//       </group>

//       {/* Teclado */}
//       <mesh
//         material={materials.keys}
//         geometry={nodes.keyboard.geometry}
//         position={[1.79, 0, 3.45]}
//       />

//       {/* Parte base de la laptop y trackpad */}
//       <group position={[0, -0.1, 3.39]}>
//         <mesh
//           material={materials.aluminium}
//           geometry={nodes["Cube002"].geometry}
//         />
//         <mesh
//           material={materials.trackpad}
//           geometry={nodes["Cube002_1"].geometry}
//         />
//       </group>

//       {/* Touchbar (barra táctil superior del teclado) */}
//       <mesh
//         material={materials.touchbar}
//         geometry={nodes.touchbar.geometry}
//         position={[0, -0.03, 1.2]}
//       />
//     </group>
//   );
// }

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulación de envío
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     console.log("Mensaje enviado:", formData);

//     alert("¡Mensaje enviado con éxito!");

//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="container min-h-[90vh]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold">Contáctame</h2>
//         </motion.div>

//         <div className="flex flex-col md:flex-row">
//           <div className="w-full h-[1000px]">
//             <Canvas
//               camera={{ position: [-5, 0, -15], fov: 55 }}
//               dpr={Math.min(window.devicePixelRatio, 2)}
//               gl={{ antialias: true }}
//             >
//               <Suspense fallback={null}>
//                 {/* Grupo que contiene el modelo rotado 180° en el eje Y (para que mire al frente) */}
//                 <group
//                   rotation={[0, Math.PI, 0]}
//                   position={[0, 1, 0]}
//                   scale={1}
//                 >
//                   <Model />
//                 </group>

//                 {/* Entorno con iluminación tipo "ciudad" (HDRI) */}
//                 <Environment preset="city" />
//               </Suspense>

//               {/* Sombra suave debajo del modelo */}
//               <ContactShadows
//                 position={[0, -4.5, 0]}
//                 scale={20}
//                 blur={2}
//                 far={4.5}
//               />

//               {/* Controles de cámara: permite rotar pero no hacer zoom o mover */}
//               <OrbitControls
//                 enablePan={false}
//                 enableZoom={false}
//                 minPolarAngle={Math.PI / 2.2}
//                 maxPolarAngle={Math.PI / 2.2}
//               />
//             </Canvas>
//           </div>

//           {/* Formulario */}

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="md:w-1/2 mt-48"
//           >
//             <form
//               onSubmit={handleSubmit}
//               // className="bg-transparent dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 "
//             >
//               <div className="mb-6">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Nombre
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Tu nombre"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="tu@email.com"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Mensaje
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Tu mensaje..."
//                 />
//               </div>

//               <a
//                 href={`mailto:angelica.bengelsdorff.5@gmail.com?subject=Contacto%20de%20${encodeURIComponent(
//                   formData.name
//                 )}&body=Email:%20${encodeURIComponent(
//                   formData.email
//                 )}%0A%0AMensaje:%0A${encodeURIComponent(formData.message)}`}
//                 className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all text-center block"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Enviar mensaje por correo
//               </a>
//             </form>

//             <div className=" flex justify-between mt-4 h-12 items-center px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//               <Mail className="" />
//               <Phone className="" />
//               <Linkedin className="" />
//               <Github className="" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
