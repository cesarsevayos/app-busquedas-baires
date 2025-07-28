const neighborhoods = [
  {
    name: "San Telmo",
    description: "Bohemio, histórico y lleno de vida cultural.",
    image: "src/assets/images/image2.png",
    rating: 5,
  },
  {
    name: "Palermo",
    description: "Bohemio, histórico y lleno de vida cultural.",
    image: "src/assets/images/image4.png",
    rating: 5,
  },
  {
    name: "Puerto Madero",
    description: "Bohemio, histórico y lleno de vida cultural.",
    image: "src/assets/images/image3.png",
    rating: 5,
  },
  {
    name: "Recoleta",
    description: "Bohemio, histórico y lleno de vida cultural.",
    image: "src/assets/images/image2.png",
    rating: 5,
  },
];

const NeighborhoodCards = () => {
  return (
    <section className="p-6">
      <h2 className="text-xl font-roboto font-semibold mb-4">
        Barrios destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {neighborhoods.map((barrio, index) => (
          <div key={index} className="rounded-lg shadow overflow-hidden">
            <img
              src={barrio.image}
              alt={barrio.name}
              className="w-full h-max object-cover aspect-video"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-roboto font-bold">{barrio.name}</h3>
                <span className="text-yellow-400">
                  {"★".repeat(barrio.rating)}
                </span>
              </div>
              <p className="text-sm text-black font-roboto">
                {barrio.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeighborhoodCards;
