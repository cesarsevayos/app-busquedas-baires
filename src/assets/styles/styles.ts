// Puedes definir clases de Tailwind como un string y luego aplicarlas en tus componentes.
// Por ejemplo:
export const boxStyles = {
  width: 250,
  height: 200,
  padding: 50,
  marginRight: 16,
  backgroundColor: "#000000",
  borderRadius: 8,
};

// Ejemplo de clase Tailwind como string:
export const boxTailwindClass = "bg-black rounded-lg mr-8 w-[500px]";

// Luego, en tu componente React:
// <div style={boxStyles} className={boxTailwindClass}>Contenido</div>

export const containerStyles = "{display: 'flex', flexDirection: 'row'}";
export const mapStyles = "with: 200, marginRight: 16";



export const stylesTailwind = {
    aside:
      "checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white",
    asideOpen: "flex",
    asideClosed: "hidden",
    header: "flex justify-between items-center p-6",
    icon: "h-6 w-6 text-black",
    products: "px-6 overflow-y-scroll flex-1",
    totalContainer: "px-6 mb-6",
    totalRow: "flex justify-between items-center mb-3",
    totalLabel: "font-light text-xl",
    totalValue: "font-medium text-xl",
    checkoutBtn: "bg-black py-3 text-white w-full rounded-lg",
};

//llamar de esta forma:
//<div className={stylesTailwind.aside}>