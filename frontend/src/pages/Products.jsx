import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../rdux/slice/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loader

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className=" mt-4">
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="loader border-t-4 border-b-4 border-yellow-300 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border flex flex-col items-center  h-[56vh] justify-center text-center space-y-1 rounded-lg bg-white shadow-2xl border-yellow-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-36 h-36 "
              />
              <h4 className="text-[12px] text-black font-bold">
                {product.title}
              </h4>
              <h4 className="text-zinc-500 text-sm font-bold">
                ${product.category}
              </h4>
              <h4 className="text-red-700 font-bold">${product.price}</h4>

              <button
                onClick={() => handleAdd(product)}
                className="bg-yellow-300 py-1 px-3 text-black rounded-lg"
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
