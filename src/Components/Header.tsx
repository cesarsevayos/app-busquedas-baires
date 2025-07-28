import { useState } from "react";
import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react";
import { ModalLogin } from "./ModalLogin";

interface HeaderProps {
  showSearch?: boolean;
}

const Header = ({ showSearch = false }: HeaderProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isSignedIn, user } = useUser(); // Clerk hook

  return (
    <header className="h-16 flex items-center justify-between px-4 py-2 shadow border-b bg-white font-roboto">
      <div className="text-lg font-bold">LOGO</div>

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
            {/* Avatar del usuario */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverFooter: "hidden", // Oculta el footer (donde está "Manage account")
                  userButtonPopoverActionButton__signOut: "hidden", // Oculta el botón "Sign out"
                },
              }}
            />

            {/* Botón opcional de cerrar sesión explícito */}
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
