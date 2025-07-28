import { Search } from "lucide-react";

interface HeaderProps {
  showSearch?: boolean; // opcional, por defecto es false si no se pasa
}

const Header = ({ showSearch = false }: HeaderProps) => {
  return (
    <header className="h-16 flex items-center justify-between px-4 py-2 shadow border-b bg-white">
      <div className="text-lg font-bold">LOGO</div>

      {showSearch && (
        <input
          type="text"
          placeholder="🔍 Búsqueda"
          className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
      )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Ingresar
      </button>
    </header>
  );
};

export default Header;
