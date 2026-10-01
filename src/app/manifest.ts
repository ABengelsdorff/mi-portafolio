import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Angelica Bengelsdorff | Desarrolladora Full Stack",
    short_name: "Bengelsdorff",
    description:
      "Portafolio de Angelica Bengelsdorff, desarrolladora Full Stack y diseñadora UX/UI en Buenos Aires.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#7c3aed",
    lang: "es-AR",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
