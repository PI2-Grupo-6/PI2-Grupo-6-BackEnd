/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import express from "express";
import Food from "../models/Food";

export default class FoodController {
    static async createFood(request: express.Request, response: express.Response) {
        const food = await Food.create({
            name: request.body.name,
            foodType: request.body.foodType,
            description: request.body.description
        });

        await food.save();

        return response.status(200).send(food);
    }

    static async update(request: express.Request, response: express.Response) {
        const food = await Food.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(food);
    }

    static async get(request: express.Request, response: express.Response) {
        const food = await Food.findById(request.params.id);
        if (!food) {
            return response.status(400).send({
                error: 'No food found with this ID'
            });
        }

        return response.status(200).send(food);
    }

    static async delete(request: express.Request, response: express.Response) {
        const food = await Food.findByIdAndDelete(request.params.id);

        return response.status(200).send(food);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const foods = await Food.find();

        return response.status(200).send(foods);
    }
}