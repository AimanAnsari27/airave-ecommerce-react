import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();
const useOrder = () => useContext(OrderContext);

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState("");
  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    const res = await axios.get("/api/user/order", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    console.log(res.data);
  };
  const addOrderHandler = async (order) => {
    try {
      const res = await axios({
        method: "post",
        url: "/api/user/order",
        data: {
          order,
        },
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log("order", res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <OrderContext.Provider value={{ addOrderHandler }}>
      {children}
    </OrderContext.Provider>
  );
};
export { OrderProvider, useOrder };
