const ShowCard = ({ data, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  const { items } = data[0];
  console.log(items);
  return (
    <div className="container flex justify-center items-center">
      <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div className="card bg-base-100   border border-green-500 shadow-md">
            <figure className="px-6 pt-6">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={item.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="text-center font-bold">{item.name}</h2>
              <hr className="border border-green-500 w-full" />
              <p><span className="font-bold text-green-600">Price :</span> {item.unitPrice}</p>
              <p><span className="font-bold text-green-600">Quantity Collected : </span>{item.quantityCollected} </p>
              <p><span className="font-bold text-green-600">Total collection : </span>{item.totalCollection}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCard;
