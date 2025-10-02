import Box from "./Box";
import { useAppContext } from "../context/context";

const ImageListSection = () => {
  const { lugares } = useAppContext();

  return (
    <section className="h-full overflow-y-auto p-4 flex flex-col gap-4">
      {lugares.map((item: any, index: any) => (
        <Box
          key={index}
          imageUrl={item.image}
          title={item.nombre}
          description={item.detalle}
        />
      ))}
    </section>
  );
};

export default ImageListSection;