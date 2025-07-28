// import { useState } from "react";

const comments = [
  {
    name: "Lucía",
    date: "Aug 19, 2021",
    comment:
      "Me mudé a Palermo hace dos años y no lo cambio por nada. Tiene todo: buenos parques, una gran oferta gastronómica y está bien conectado...",
    stars: 4,
    avatar: "src/assets/images/image5.jpg",
  },
  {
    name: "Matín",
    date: "Aug 19, 2021",
    comment:
      "Palermo es inspiración pura. Las calles llenas de arte urbano, las cafeterías con estilo propio y la mezcla entre lo moderno y lo clásico...",
    stars: 4,
    avatar: "src/assets/images/image5.jpg",
  },
  {
    name: "Sofía",
    date: "Aug 19, 2021",
    comment:
      "Palermo tiene algo mágico de noche. Hay bares con música en vivo, shows íntimos y lugares que solo descubrís si conocés a alguien...",
    stars: 5,
    avatar: "src/assets/images/image5.jpg",
  },
];

import { useState } from "react";

const CommentSection = () => {
  const [input, setInput] = useState("");

  return (
    <div className="p-6">
      {/* Input de comentario */}
      <div className="flex items-start gap-4 mb-8">
        {/* Avatar */}
        <img
          src="src/assets/images/image5.jpg"
          alt="User"
          className="w-10 h-10 rounded-full mt-1"
        />

        {/* Input con botón a la derecha */}
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full border rounded-full px-4 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribir un comentario"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600 transition">
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
