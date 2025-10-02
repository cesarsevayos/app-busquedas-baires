// CommentSection.tsx
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect, useMemo } from "react";
import { useAppContext } from "../context/context";

/* ========= Helpers ========= */
const normalizeKey = (s: string) =>
  (s || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

const getBarrioName = (b: any): string => {
  if (!b) return "";
  if (typeof b === "string") return b;
  return b.nombre ?? b.name ?? b.barrio ?? "";
};

const storageKeyFrom = (barrioName: string) =>
  `comentarios-${normalizeKey(barrioName)}`;

const readComments = (barrioName: string) => {
  const raw = localStorage.getItem(storageKeyFrom(barrioName));
  const arr = raw ? JSON.parse(raw) : [];
  return (arr as any[]).map((c) => ({
    favorites: [],
    id: c.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...c,
  }));
};

const writeComments = (barrioName: string, comments: any[]) => {
  localStorage.setItem(storageKeyFrom(barrioName), JSON.stringify(comments));
};

// Estrellas de solo lectura 0..5 (con medios puntos)
const ReadonlyStars = ({ value }: { value: number }) => {
  const rounded = Math.round(value * 2) / 2;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rounded);
        const half = !full && i - rounded === 0.5;
        return (
          <span key={i} className="text-yellow-500 leading-none">
            {full ? "★" : half ? "⯨" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

/* ========= Componente ========= */

const CommentSection = () => {
  const { barrioSelected, direction } = useAppContext();
  const { user } = useUser();
  const barrioName = useMemo(() => getBarrioName(barrioSelected), [barrioSelected]);

  const [detalle, setDetalle] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  // Cargar por barrio
  useEffect(() => {
    if (!barrioName) return;
    setComments(readComments(barrioName));
  }, [barrioName]);

  // Crear comentario
  const handleComentario = () => {
    if (!detalle.trim() || !user || !barrioName) return;

    const nuevo = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      idUser: user.id,
      name: user.fullName || user.username || "Usuario",
      avatar: user.imageUrl,
      comment: detalle.trim(),
      date: new Date().toLocaleDateString("es-AR"),
      barrio: barrioName,
      comuna: direction?.comuna,
      favorites: [] as string[],
    };

    const next = [...comments, nuevo];
    setComments(next);
    writeComments(barrioName, next);
    setDetalle("");
  };

  // Toggle ❤️
  const toggleFavorite = (commentId: string) => {
    if (!user || !barrioName) return;
    const next = comments.map((c) => {
      if (c.id !== commentId) return c;
      const set = new Set<string>(c.favorites || []);
      if (set.has(user.id)) set.delete(user.id);
      else set.add(user.id);
      return { ...c, favorites: Array.from(set) };
    });
    setComments(next);
    writeComments(barrioName, next);
  };

  // Calcular estrellas desde likes (escala absoluta: 10 likes = 5★)
  const likesToStars = (likes: number) => Math.min(5, (likes / 10) * 5);

  return (
    <div className="p-6">
      {/* Caja de comentario */}
      {user && (
        <div className="flex items-start gap-4 mb-8">
          <img src={user.imageUrl} alt="User" className="w-10 h-10 rounded-full mt-1" />
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full border rounded-full px-4 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={`Escribir un comentario en ${barrioName}...`}
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

      {/* Lista */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-sm text-gray-500">
            {barrioName ? `No hay comentarios en ${barrioName}.` : "Sin barrio seleccionado."}
          </div>
        ) : (
          comments.map((c) => {
            const favorites: string[] = c.favorites || [];
            const isFav = user ? favorites.includes(user.id) : false;
            const starsFromLikes = likesToStars(favorites.length);

            return (
              <div key={c.id} className="flex gap-4">
                <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-full mt-1" />
                <div className="flex-1 border rounded-xl p-4 bg-white shadow-md">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className="font-semibold">{c.name}</div>
                      <div className="text-sm text-gray-500">{c.date}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* ⭐ calculadas desde likes */}
                      <ReadonlyStars value={starsFromLikes} />
                      <span className="text-xs text-gray-500">({favorites.length} ❤)</span>

                      {/* ❤️ toggle */}
                      <button
                        onClick={() => toggleFavorite(c.id)}
                        title={isFav ? "Quitar me gusta" : "Dar me gusta"}
                        className="ml-2"
                      >
                        <span className={isFav ? "text-rose-500" : "text-gray-400"}>❤</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm">{c.comment}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CommentSection;
