const Navbar = () => {
  return (
    <nav className="flex fixed sm:sticky top-0 left-0 p-6 sm:p-6 items-center bg-transparent sm:bg-black z-10 text-white">
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-between items-center">
        <h1>Movie Explorer</h1>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
