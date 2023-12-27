import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Getorderdetail } from "../../../Redux/action/orderSummary";
import { getUserId } from "../../../utils/auth";

const TrackOrder = () => {
  const dispatch = useDispatch();

  const userData = getUserId();
  console.log(userData, "usr");
  const idata = userData.id;
  console.log(idata, "daa");

  const orderdatasum = useSelector(
    (state) => state?.getallorderdetail?.listdata?.data?.ordersWithProducts
  );
  console.log(orderdatasum, "dataorder");

  useEffect(() => {
    dispatch(Getorderdetail({ userid: idata }));
  }, [""]);

  //   const handleViewDetails = () => {};

  return (
    <div>
      <div className="recent_orders">
        <h3>Your Orders</h3>
      </div>
      <Table responsive="md" className="main">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Price </th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through orders array to populate table rows */}
          {orderdatasum?.map((e, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{e?.amount}</td>
            </tr>
            // <tr key={index}>
            //   <td>{order.orderCode}</td>
            //   <td>{order.placedOn}</td>
            //   <td>{order.items}</td>
            //   <td>{order.total}</td>
            //   <td>{order.status}</td>
            //   <td>
            //     <button onClick={() => handleViewDetails(order.orderCode)}>
            //       View Details
            //     </button>
            //   </td>
            // </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TrackOrder;
