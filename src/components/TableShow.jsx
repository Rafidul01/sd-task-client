import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TableShow = ({ data, loading }) => {
  if (loading) {
    return <>
     <div className="flex justify-center items-center">
        <div className="w-full">
          <div className="overflow-x-auto p-4 mx-auto">
            <table className="table border-2 border-black bg-gray-200">
              {/* Skeleton Table Head */}
              <thead>
                <tr className="text-center text-xl text-rose-400 border-b-2 border-black">
                  <th>
                    <Skeleton width={100} height={20} />
                  </th>
                  <th>
                    <Skeleton width={100} height={20} />
                  </th>
                  <th>
                    <Skeleton width={100} height={20} />
                  </th>
                  <th>
                    <Skeleton width={100} height={20} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Skeleton Rows */}
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="text-center">
                    <td>
                      <Skeleton width={120} height={20} />
                    </td>
                    <td>
                      <Skeleton width={80} height={20} />
                    </td>
                    <td>
                      <Skeleton width={80} height={20} />
                    </td>
                    <td>
                      <Skeleton width={100} height={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>;
  }

  const { items } = data[0];
  return (
    <div className="flex justify-center item-center">
      <div className="w-full" >
        <div className="overflow-x-auto p-4 mx-auto">
          <table className="table border-2 border-black bg-gray-200">
            {/* head */}
            <thead>
              <tr className="text-center text-xl text-rose-400 border-b-2 border-black">
                <th >Name</th>
                <th>Unit Price</th>
                <th>Quantity Sold</th>
                <th>Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, i) => (
                  <tr key={i} className="text-center ">
                    <td className="font-bold">{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.quantitySold}</td>
                    <td>{item.totalRevenue}</td>
                  </tr>
                ))  
              }

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableShow;
