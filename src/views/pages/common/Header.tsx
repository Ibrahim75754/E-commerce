import logo from "../../../assets/image/logo.png";

export const Header = () => {
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto flex items-center">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <input type="text" />
          <button className="bg-sky-500">search</button>
        </div>
      </div>
    </div>
  );
};
