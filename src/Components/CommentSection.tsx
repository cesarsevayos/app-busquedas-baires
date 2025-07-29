import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context";

const CommentSection = () => {
  console.log("CommentSection rendered");
  const [input, setInput] = useState("");
  const { direction } = useAppContext();

  const [detalle, setDetalle] = useState("");
  const { user } = useUser();
  const comentarios = JSON.parse(
    localStorage.getItem("comentarios-Palermo") || "[]"
  );
  // const handleComentario = () => {
  //   console.log("handleComentario called");
  //   console.log("Detalle:", detalle);
  //   console.log("User:", user);
  //   console.log("intentando guardar comentario:");

  //   if (!detalle.trim() || !user) return;
  //   guardarComentarioEnLocalStorage(
  //     {
  //       idUser: user.id,
  //       detalle,
  //       comuna: direction.comuna,
  //       barrio: direction.barrio,
  //     },
  //     "barrio" // o "comuna" si querés agrupar por comuna
  //   );

  //   setDetalle(""); // limpiar input
  //   alert("¡Comentario guardado!");
  // };

  const handleComentario = () => {
  console.log("handleComentario called");
  console.log("Detalle:", detalle);
  console.log("User:", user);

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
    stars: 4, // si no estás usando estrellas aún, podés dejar un valor fijo
  };

  guardarComentarioEnLocalStorage(nuevoComentario, "barrio");

  // Actualiza directamente los comentarios en estado
  const updated = JSON.parse(
    localStorage.getItem(`comentarios-${direction.barrio}`) || "[]"
  );
  setComments(updated);

  setDetalle(""); // limpiar input
  alert("¡Comentario guardado!");

  // Si querés seguir usando el evento personalizado (opcional)
  window.dispatchEvent(new Event("comentario-agregado"));
};

  const [comments, setComments] = useState<any[]>([]);

  // Función para leer localStorage
  const cargarComentarios = () => {
    const data = JSON.parse(
      localStorage.getItem(`comentarios-${direction.barrio}`) || "[]"
    );
    setComments(data);
  };

  useEffect(() => {
    // Cargar al montar el componente
    cargarComentarios();

    // Escuchar evento personalizado para actualizar al agregar uno nuevo
    const handleUpdate = () => {
      cargarComentarios();
    };

    window.addEventListener("comentario-agregado", handleUpdate);

    return () => {
      window.removeEventListener("comentario-agregado", handleUpdate);
    };
  }, [direction.barrio]);

  return (
    <div className="p-6">
      {/* Input de comentario */}
      <div className="flex items-start gap-4 mb-8">
        {/* Avatar */}
        <img
          src={user?.imageUrl}
          alt="User"
          className="w-10 h-10 rounded-full mt-1"
        />

        {/* Input con botón a la derecha */}
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full border rounded-full px-4 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribir un comentario"
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
          />
          <button 
              onClick={() => handleComentario()}          
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600 transition">
            Comentar
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((c, i) => (
          <div key={i} className="flex gap-4">
            {/* Avatar fuera de la card */}
            <img
              src={c.avatar}
              alt={c.name}
              className="w-10 h-10 rounded-full mt-1"
            />
            {/* Card de comentario */}
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

// Guardar el comentario bajo la key del barrio o comuna
export const guardarComentarioEnLocalStorage = (
  comentario: any,
  usarKey: "barrio" | "comuna" = "barrio"
) => {
  const key = comentario[usarKey]; // Ej: "Palermo" o "Comuna 6"
  const storageKey = `comentarios-${key}`;

  const existentes = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const nuevos = [...existentes, comentario];

  localStorage.setItem(storageKey, JSON.stringify(nuevos));
};
