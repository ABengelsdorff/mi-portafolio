// Componente de contacto que se renderiza dentro del modelo 3D (pantalla de la laptop)
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import './stylesLaptop.css';

const currentYear = new Date().getFullYear();

// Componente principal que se renderiza dentro del modelo 3D (pantalla de la laptop)
export default function HeroPage() {
  return (
    <div
      style={{
        width: "600px",
        height: "1000px",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
        padding: "24px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        overflowY: "auto",
        overflowX: "hidden",
        boxSizing: "border-box",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
      className="no-scrollbar"
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          width: "100%",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "10px",
            }}
          >
            ¿Trabajamos juntas/os?
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              lineHeight: "1.5",
            }}
          >
            Siempre hay espacio para una buena idea. ¡Podés contactarme sin
            compromiso!
          </p>

          {/* Contacto principal */}
          <div className="space-y-4 mt-4">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-slate-600">
                  <a
                    href="mailto:Angelica.bengelsdorff.5@gmail.com"
                    className="hover:underline text-primary"
                  >
                    Angelica.bengelsdorff.5@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <p className="text-slate-600">
                  <a
                    href="tel:+543751608480"
                    className="hover:underline text-primary"
                  >
                    +54 3751 608480
                  </a>
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <p className="text-slate-600">
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

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <p className="text-slate-600">
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

          {/* Información adicional */}
          <div
            style={{
              marginTop: "24px",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#111",
            }}
          >
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                color: "#111",
                marginBottom: "10px",
              }}
            >
              Más sobre mí
            </h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
                lineHeight: "1.5",
              }}
            >
              Spoiler: Sí, estoy disponible y con muchas ganas.
            </p>

            <p className="m-2">
              <strong>📍 Ubicación:</strong> San Miguel, Buenos Aires, Argentina
            </p>
            <p className="m-2">
              <strong>🕒 Disponibilidad:</strong> Full Time
            </p>
            <p className="m-2">
              <strong>🌍 Idiomas:</strong> Español nativo, Portugués intermedio
            </p>
            <p className="m-2">
              <strong>💻 ¿Remoto, híbrido, presencial?:</strong> Me adapto.
            </p>
            <p className="m-2">
              <strong>💡 Extra:</strong> Puedo trabajar de forma autónoma, pero
              también soy fan del trabajo colaborativo.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center text-sm text-slate-500 mt-4 border-t border-white/10 pt-4">
          © {currentYear} Bengelsdorff Angélica. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
