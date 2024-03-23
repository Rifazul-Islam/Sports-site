const Navbar = () => {
  return (
    <div className="bg-blue-100 shadow-md py-4 flex justify-between items-center px-5">
      <div className="text-2xl font-bold border-b-4 border-red-600">Sports</div>
      <div>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default Navbar;
