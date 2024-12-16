import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./rdux/slice/counter";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleInc}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
          >
            +
          </button>

          <span className="text-2xl font-bold">{count}count</span>

          <button
            onClick={handleDec}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
