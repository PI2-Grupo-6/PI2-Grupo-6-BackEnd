/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from "express";
import Canister from "../models/Canister";

export default class CanisterController {
    static async createCanister(request: express.Request, response: express.Response) {
        const canister = await Canister.create({
            name: request.body.name,
            bocalType: request.body.bocalType,
            hotOrCold: request.body.hotOrCold
        });

        await canister.save();

        return response.status(200).send(canister);
    }

    static async update(request: express.Request, response: express.Response) {
        const canister = await Canister.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(canister);
    }

    static async addFood(request: express.Request, response: express.Response) {
        const canister = await Canister.findOneAndUpdate(
            { _id: request.params.id },
            {
                $currentDate: {
                    addedTime: true
                },
                $push: {
                    logFood: request.body.food,
                }
            },
        )

        return response.status(200).send(canister);
    }

    static async addFullPercentage(request: express.Request, response: express.Response) {
        const canister = await Canister.findOneAndUpdate(
            { _id: request.params.id },
            {
                $currentDate: {
                    addedTime: true
                },
                $push: {
                    logHowFull: request.body.howFull,
                }
            },
        )

        return response.status(200).send(canister);
    }

    static async addTemperature(request: express.Request, response: express.Response) {
        const canister = await Canister.findOneAndUpdate(
            { _id: request.params.id },
            {
                $currentDate: {
                    addedTime: true
                },
                $push: {
                    logTemperature: request.body.temperature,
                }
            },
        )

        return response.status(200).send(canister);
    }

    static async get(request: express.Request, response: express.Response) {
        const canister = await Canister.findById(request.params.id);
        if (!canister) {
            return response.status(400).send({
                error: 'No canister found with this ID'
            });
        }

        return response.status(200).send(canister);
    }

    static async delete(request: express.Request, response: express.Response) {
        const canister = await Canister.findByIdAndDelete(request.params.id);

        return response.status(200).send(canister);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const canisters = await Canister.find();

        return response.status(200).send(canisters);
    }

    static async getHot(request: express.Request, response: express.Response) {
        const canisters = await Canister.find({hotOrCold: true});

        return response.status(200).send(canisters);
    }

    static async getCold(request: express.Request, response: express.Response) {
        const canisters = await Canister.find({hotOrCold: false});

        return response.status(200).send(canisters);
    }
}