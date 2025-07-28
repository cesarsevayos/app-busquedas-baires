import { SignIn } from "@clerk/clerk-react";

export const ModalLogin = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Ingresá para descubrir Buenos Aires
        </h2>

        <SignIn
          routing="virtual"
          appearance={{
            elements: {
              // Ajustes visuales
              card: 'bg-white shadow-none',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',

              // Botones sociales
              socialButtonsBlockButton:
                'w-full py-3 text-base rounded-xl border border-gray-300 mb-3 font-roboto hover:bg-gray-100 transition',

              // Separador "o continúa con correo"
              dividerText: 'text-gray-400',

              // Campos input (si activás email más adelante)
              formFieldInput:
                'w-full px-4 py-2 border rounded-xl font-roboto text-sm',
            },
          }}
        />
      </div>
    </div>
  );
};
