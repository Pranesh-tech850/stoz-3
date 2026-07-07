import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Package,
  CheckCircle,
  Clock,
  Trash2,
} from "lucide-react";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get("/orders");

      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const markDelivered = async (orderId) => {
    try {
      await api.put(`/orders/${orderId}`, {
        isDelivered: true,
      });

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId
            ? { ...order, isDelivered: true }
            : order
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await api.delete(`/orders/${orderId}`);

      setOrders((prev) =>
        prev.filter((order) => order._id !== orderId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Manage Orders 📦
          </h1>

          <p className="mt-2 text-indigo-100">
            Track and manage customer orders
          </p>
        </div>

        {/* Orders Table */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-slate-900 text-white p-5">
            <h2 className="text-xl font-semibold">
              All Orders
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Items</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium">
                      #{order._id.slice(-8)}
                    </td>

                    <td className="p-4">
                      {order.user?.name || "Customer"}
                    </td>

                    <td className="p-4">
                      {order.orderItems?.length || 0}
                    </td>

                    <td className="p-4 font-semibold text-green-600">
                      ₹{order.totalPrice}
                    </td>

                    <td className="p-4">
                      {order.isDelivered ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-2 w-fit">
                          <CheckCircle size={16} />
                          Delivered
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-2 w-fit">
                          <Clock size={16} />
                          Pending
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-3">

                        {!order.isDelivered && (
                          <button
                            onClick={() =>
                              markDelivered(order._id)
                            }
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                          >
                            Deliver
                          </button>
                        )}

                        <button
                          onClick={() =>
                            deleteOrder(order._id)
                          }
                          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Package
              size={32}
              className="text-blue-600"
            />

            <h3 className="mt-3 text-lg font-semibold">
              Total Orders
            </h3>

            <p className="text-3xl font-bold">
              {orders.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <CheckCircle
              size={32}
              className="text-green-600"
            />

            <h3 className="mt-3 text-lg font-semibold">
              Delivered
            </h3>

            <p className="text-3xl font-bold">
              {
                orders.filter(
                  (order) => order.isDelivered
                ).length
              }
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Clock
              size={32}
              className="text-orange-600"
            />

            <h3 className="mt-3 text-lg font-semibold">
              Pending
            </h3>

            <p className="text-3xl font-bold">
              {
                orders.filter(
                  (order) => !order.isDelivered
                ).length
              }
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ManageOrdersPage;