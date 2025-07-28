import Box from "./Box";

const imageList = [
  { url: "src/assets/images/image4.png", title: "Palermo Hollywood" },
  { url: "src/assets/images/image4.png", title: "Palermo Chico" },
  { url: "src/assets/images/image4.png", title: "Palermo Nuevo" },
  { url: "src/assets/images/image4.png", title: "Palermo Soho" },
];

const ImageListSection = () => {
  return (
    <section className="flex flex-col gap-4 p-6 h-full">
      {imageList.map((img, index) => (
        <Box key={index} imageUrl={img.url} title={img.title} />
      ))}
    </section>
  );
};

export default ImageListSection;
