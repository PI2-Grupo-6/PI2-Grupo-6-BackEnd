import express from "express";
import Machine from "../models/Machine";

export default class MachineController {
    static async createMachine(request: express.Request, response: express.Response) {
        const machine = await Machine.create({
            status: request.body.status,
            isActivated: request.body.isActivated,
        });

        await machine.save();

        return response.status(200).send(machine);
    }

    static async update(request: express.Request, response: express.Response) {
        const machine = await Machine.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(machine);
    }

    static async get(request: express.Request, response: express.Response) {
        const machine = await Machine.findById(request.params.id);
        if (!machine) {
            return response.status(400).send({
                error: 'No machine found with this ID'
            });
        }

        return response.status(200).send(machine);
    }

    static async delete(request: express.Request, response: express.Response) {
        const machine = await Machine.findByIdAndDelete(request.params.id);

        return response.status(200).send(machine);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const machines = await Machine.find();

        return response.status(200).send(machines);
    }
}