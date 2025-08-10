// CommentSection.tsx
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/context";

// Función para guardar comentario en localStorage
export const guardarComentarioEnLocalStorage = (
  comentario: any,
  usarKey: "barrio" | "comuna" = "barrio"
) => {
  const key = comentario[usarKey];
  const storageKey = `comentarios-${key}`;
  const existentes = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const nuevos = [...existentes, comentario];
  localStorage.setItem(storageKey, JSON.stringify(nuevos));
};

const CommentSection = () => {
  const { direction } = useAppContext();
  const { user } = useUser();
  const [detalle, setDetalle] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  // Manejar nuevo comentario
  const handleComentario = () => {
    if (!detalle.trim() || !user) return;

    const nuevoComentario = {
      idUser: user.id,
      detalle,
      comuna: direction.comuna,
      barrio: direction.barrio,
      name: user.fullName || user.username || "Usuario",
      avatar: user.imageUrl,
      comment: detalle,
      date: new Date().toLocaleDateString("es-AR"),
      stars: 4,
    };

    guardarComentarioEnLocalStorage(nuevoComentario, "barrio");
    setDetalle("");
    alert("¡Comentario guardado!");

    // Actualizar lista
    const actualizados = JSON.parse(
      localStorage.getItem(`comentarios-${direction.barrio}`) || "[]"
    );
    setComments(actualizados);
  };

  // Cargar comentarios al inicio o cuando cambia el barrio
  useEffect(() => {
    const cargar = () => {
      const data = JSON.parse(
        localStorage.getItem(`comentarios-${direction.barrio}`) || "[]"
      );
      setComments(data);
    };

    cargar();
  }, [direction.barrio]);

  return (
    <div className="p-6">
      {/* Comentario solo si está logueado */}
      {user && (
        <div className="flex items-start gap-4 mb-8">
          <img
            src={user.imageUrl}
            alt="User"
            className="w-10 h-10 rounded-full mt-1"
          />

          <div className="relative flex-1">
            <input
              type="text"
              className="w-full border rounded-full px-4 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Escribir un comentario"
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
            />
            <button
              onClick={handleComentario}
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600 transition"
            >
              Comentar
            </button>
          </div>
        </div>
      )}

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comments.map((c, i) => (
          <div key={i} className="flex gap-4">
            <img
              src={c.avatar}
              alt={c.name}
              className="w-10 h-10 rounded-full mt-1"
            />
            <div className="flex-1 border rounded-xl p-4 bg-white shadow-md">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-gray-500">{c.date}</div>
                </div>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(c.stars) + "☆".repeat(5 - c.stars)}
                </div>
              </div>
              <p className="text-gray-700 text-sm">{c.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
