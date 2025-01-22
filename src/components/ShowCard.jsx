import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ShowCard = ({ data, loading }) => {
  if (loading) {
    return <div className="container mx-auto">
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="card bg-base-100 border border-green-500 shadow-md"
        >
          <figure className="px-6 pt-6">
            <Skeleton
              height={200}
              width={300}
              style={{
                borderRadius: '1rem',
              }}
            />
          </figure>
          <div className="card-body">
            <Skeleton
              width="70%"
              height={20}
              className="mb-2"
              style={{
                margin: '0 auto',
              }}
            />
            <hr className="border border-green-500 w-full my-2" />
            <Skeleton width="90%" height={15} className="mb-1" />
            <Skeleton width="90%" height={15} className="mb-1" />
            <Skeleton width="90%" height={15} className="mb-1" />
          </div>
        </div>
      ))}
    </div>
  </div>;
  }

  const { items } = data[0];
  console.log(items);
  return (
    <div className="container mx-auto">
      <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div className="card bg-base-100   border border-green-500 shadow-md">
            <figure className="px-6 pt-6 h-64 w-full">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-xl h-full w-full"
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
