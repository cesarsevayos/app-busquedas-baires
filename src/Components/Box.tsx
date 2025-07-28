interface BoxProps {
  imageUrl: string;
  title: string;
}

const Box = ({ imageUrl, title }: BoxProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
      />
      <div className="flex flex-col justify-center p-4 text-center sm:text-left">
        <h3 className="font-roboto font-semibold text-lg">{title}</h3>
        <p className="font-roboto text-sm text-black">
          Bohemio, histórico y lleno de vida cultural.
        </p>
      </div>
    </div>
  );
};



export default Box;
