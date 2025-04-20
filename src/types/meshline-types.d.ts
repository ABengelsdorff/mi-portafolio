// src/types/meshline.d.ts
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

type MeshLineGeometryProps = ThreeElements["bufferGeometry"] & {
  points?: THREE.Vector3[];
  attach?: string;
};

type MeshLineMaterialProps = ThreeElements["material"] & {
  color?: string;
  lineWidth?: number;
  map?: THREE.Texture;
  useMap?: number;
  repeat?: THREE.Vector2;
  depthTest?: boolean;
  resolution?: THREE.Vector2;
  attach?: string;
};

// 👇 esta es la clave correcta para JSX con React y @react-three/fiber
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: MeshLineGeometryProps;
      meshLineMaterial: MeshLineMaterialProps;
    }
  }
}
