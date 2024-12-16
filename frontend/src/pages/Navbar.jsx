import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between px-20 py-5 border-b bg-slate-900 ">
      <div>redux store</div>
      <div className="flex justify-between w-[50vw]">
        <div>
          <ul className="flex space-x-4">
            <li className="border py-1 px-2 hover:bg-yellow-400 hover:text-black rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="border py-1 px-2 hover:bg-yellow-400 hover:text-black rounded-md">
              <Link to="/cart">CartList</Link>
            </li>
          </ul>
        </div>
        <div className="border py-1 px-2 bg-yellow-400 rounded-md  text-black">
          CartItmes: {items.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
