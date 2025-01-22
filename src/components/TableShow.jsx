const TableShow = ({ data, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  const { items } = data[0];
  return (
    <div className="flex justify-center item-center">
      <div className="w-full" >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th >Name</th>
                <th>Unit Price</th>
                <th>Quantity Sold</th>
                <th>Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, i) => (
                  <tr key={i} className="text-center">
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
