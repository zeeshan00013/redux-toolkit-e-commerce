import { useSelector, useDispatch } from "react-redux";
import { remove } from "../rdux/slice/cartSlice";
import { selectTotalPrice } from "../rdux/slice/cartSlice";
import { useState } from "react";

const Cart = () => {
  const [loading, setLoading] = useState(false); // Loader state
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemove = (productId) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(remove(productId));
      setLoading(false);
    }, 500); // Simulate loading time
  };

  return (
    <div className="px-10 space-y-4">
      <h3 className="text-2xl font-bold text-black">Cart</h3>
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="loader border-t-4 border-b-4 border-yellow-300 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : CartItem.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h4 className="text-lg font-bold text-gray-500">
            Your cart is empty.
          </h4>
        </div>
      ) : (
        <div className="space-y-3">
          {CartItem.map((product) => (
            <div
              key={product.id}
              className="border flex justify-between items-center h-[16vh] px-10 rounded-lg bg-white shadow-2xl border-yellow-300"
            >
              <img
                src={product.image || "/fallback-image.png"} // Fallback image
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <h4 className="text-[12px] text-black font-bold">
                {product.title}
              </h4>
              <h4 className="text-zinc-500 text-sm font-bold">
                {product.category}
              </h4>
              <h4 className="text-red-700 font-bold">${product.price}</h4>
              <button
                className="bg-yellow-300 py-1 px-3 text-black rounded-lg"
                onClick={() => handleRemove(product.id)}
                aria-label={`Remove ${product.title} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 p-4 bg-yellow-100 rounded-lg shadow">
            <h4 className="text-xl font-bold text-black">Total Price:</h4>
            <h4 className="text-xl font-bold text-red-700">${totalPrice}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
