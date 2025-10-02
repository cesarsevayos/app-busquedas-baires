import Box from "./Box";
import { useAppContext } from "../context/context";

const ImageListSection = () => {
  const { lugares } = useAppContext();

  return (
    <section className="flex flex-col gap-4 p-6 h-full">
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
