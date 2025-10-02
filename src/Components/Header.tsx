import { useState } from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { ModalLogin } from "./ModalLogin";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showSearch?: boolean;
}

const Header = ({ showSearch = false }: HeaderProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Navega al path inicial
  };
  return (
    <header className="h-16 flex items-center justify-between px-4 py-2 shadow border-b bg-white font-roboto">
      <span
        onClick={goHome}
        className="text-xl font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition"
      >
        LOGO
      </span>
      {showSearch && (
        <input
          type="text"
          placeholder="🔍 Búsqueda"
          className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
      )}

      <div className="flex items-center gap-4">
        {!isSignedIn ? (
          <>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Ingresar
            </button>
            <ModalLogin
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </>
        ) : (
          <>
            {/* Avatar sin menú interactivo */}
            <img
              src={user?.imageUrl}
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />

            {/* Botón cerrar sesión propio */}
            <SignOutButton>
              <button className="text-red-500 border px-3 py-1 rounded hover:bg-red-50 transition">
                Cerrar sesión
              </button>
            </SignOutButton>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
