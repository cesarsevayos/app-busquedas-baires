const steps = [
  {
    title: "Explora barrios",
    description:
      "Descubrí cómo es vivir en cada barrio de Buenos Aires a través de fotos, descripciones y opiniones reales de la comunidad.",
    icon: "src/assets/icons/icon1.png",
  },
  {
    title: "Leé opiniones reales",
    description:
      "Conocé lo bueno y lo malo de cada zona. Opiniones sinceras sobre seguridad, transporte, ambiente y más.",
    icon: "src/assets/icons/icon2.png",
  },
  {
    title: "Compartí tu experiencia",
    description:
      "¿Vivís en un barrio? Compartí tu experiencia, esto puede ayudar a otras personas a tomar mejores decisiones.",
    icon: "src/assets/icons/icon1.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-blue-50 py-10 px-4">
      <h2 className="text-xl font-roboto font-semibold text-left mb-6">
        ¿Cómo funciona?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {steps.map((step, index) => (
          <div key={index} className="px-4">
            <h3 className="font-roboto font-semibold mb-4">{step.title}</h3>
            <img
              src={step.icon}
              alt={step.title}
              className="mx-auto mb-4 w-20 h-20"
            />
            <p className="text-sm text-black">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
