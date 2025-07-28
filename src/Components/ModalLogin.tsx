import { SignIn, useUser, SignOutButton, UserButton } from "@clerk/clerk-react";

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLogin = ({ isOpen, onClose }: ModalLoginProps) => {
  const { isSignedIn } = useUser();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative font-roboto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {!isSignedIn ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Ingresá para descubrir Buenos Aires
            </h2>
            <SignIn
              routing="virtual"
              appearance={{
                elements: {
                  card: "bg-white shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "w-full py-3 text-base rounded-xl border border-gray-300 mb-3 font-roboto hover:bg-gray-100 transition",
                  dividerText: "text-gray-400",
                  formFieldInput:
                    "w-full px-4 py-2 border rounded-xl font-roboto text-sm",
                },
              }}
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-4">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverFooter: "hidden",
                  userButtonPopoverActionButton__signOut: "hidden",
                },
              }}
            />
            <SignOutButton>
              <button className="text-red-500 border px-4 py-2 rounded hover:bg-red-50 transition">
                Cerrar sesión
              </button>
            </SignOutButton>
          </div>
        )}
      </div>
    </div>
  );
};
