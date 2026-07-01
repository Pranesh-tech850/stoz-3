import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {

        const {
            orderItems,
            totalPrice,
            shippingAddress,
        } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({
                message: "No order items",
            });
        }

        const order = await Order.create({
            user: req.user._id,
            orderItems,
            totalPrice,
            shippingAddress,
        });

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate("user", "name email")
            .populate("orderItems.product", "name price image");

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};