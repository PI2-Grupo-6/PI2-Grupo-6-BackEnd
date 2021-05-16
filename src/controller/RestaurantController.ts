import express from "express";
import Restaurant from "../models/Restaurant";

export default class RestaurantController {
    static async createRestaurant(request: express.Request, response: express.Response) {
        const restaurant = await Restaurant.create({
            name: request.body.name,
            machines: [],
        });

        await restaurant.save();

        return response.status(200).send(restaurant);
    }

    static async update(request: express.Request, response: express.Response) {
        const restaurant = await Restaurant.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(restaurant);
    }

    static async get(request: express.Request, response: express.Response) {
        const restaurant = await Restaurant.findById(request.params.id);
        if (!restaurant) {
            return response.status(400).send({
                error: 'No restaurant found with this ID'
            });
        }

        return response.status(200).send(restaurant);
    }

    static async delete(request: express.Request, response: express.Response) {
        const restaurant = await Restaurant.findByIdAndDelete(request.params.id);

        return response.status(200).send(restaurant);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const restaurants = await Restaurant.find();

        return response.status(200).send(restaurants);
    }
}