const Footer = () => {
  return (
    <footer className="h-12 bg-navy text-white font-roboto text-sm p-4 text-right">
      <div className="flex items-center space-x-8">
        <p className="pl-5">© 2025</p>
        <div className="space-x-2">
          <a href="#" className="hover:underline">Términos y condiciones |</a>
          <a href="#" className="hover:underline">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
