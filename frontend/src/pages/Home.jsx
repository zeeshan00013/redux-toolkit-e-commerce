import Products from "./Products";

const Home = () => {
  return (
    <div className="px-20 mt-6">
      <h2 className="text-xl">
        welcome to the redux toolkit store the redux toolkit store
      </h2>
      <section>
        <h3 className="text-2xl">product</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
