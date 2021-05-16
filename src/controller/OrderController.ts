import express from "express";
import Order from "../models/Order";

export default class OrderController {
    static async createOrder(request: express.Request, response: express.Response) {
        const order = await Order.create({
            date: request.body.date,
            items: request.body.items,
            status: request.body.status
        });

        await order.save();

        return response.status(200).send(order);
    }

    static async update(request: express.Request, response: express.Response) {
        const order = await Order.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(order);
    }

    static async get(request: express.Request, response: express.Response) {
        const order = await Order.findById(request.params.id);
        if (!order) {
            return response.status(400).send({
                error: 'No order found with this ID'
            });
        }

        return response.status(200).send(order);
    }

    static async delete(request: express.Request, response: express.Response) {
        const order = await Order.findByIdAndDelete(request.params.id);

        return response.status(200).send(order);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const orders = await Order.find();

        return response.status(200).send(orders);
    }
}