import express from "express";
import { brotliDecompressSync } from "node:zlib";
import Food from "../models/Food";

export default class FoodController {
    static async createFood(request: express.Request, response: express.Response){
        const food = await Food.create({
            name: request.body.name,
            weight: request.body.weight
        });

        await food.save();

        return response.status(200).send(food);
    }

    static async update(request: express.Request, response: express.Response){
        const food = await Food.findOneAndUpdate(
            {_id: request.params.id},
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(food);
    }
}