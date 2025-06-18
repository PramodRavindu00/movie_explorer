const Footer = () => {
  return (
    <footer className=" flex flex-col items-center justify-center w-full bg-black text-white min-h-16">
      <span className="text-sm">
        © {new Date().getFullYear()} Pramod Ravindu. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
