const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh] my-6"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/mtnmW9t/dairy-and-milk-and-butter-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center  bg-slate-600 p-8 rounded-xl">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Welcome to <span className="text-green-600">Sirajgonj </span>Dairy</h1>
            <p className="mb-5 text-black">
              Find the best dairy products in Sirajgonj. We have a wide range of
              milk, butter, yogurt, and other dairy products.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
