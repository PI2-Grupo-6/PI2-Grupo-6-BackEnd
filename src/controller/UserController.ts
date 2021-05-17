import express from "express";
import User from "../models/User";

export default class UserController {
    static async createUser(request: express.Request, response: express.Response) {
        await User.create({
            username: request.body.username,
            password: request.body.password,
            email: request.body.email
        })
        .then(user => {
            return response.status(200).send(user);
        })
        .catch(err => {
            return response.status(400).send({
                error: err.message
            });
        });
    }

    static async update(request: express.Request, response: express.Response) {
        const user = await User.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(user);
    }

    static async get(request: express.Request, response: express.Response) {
        const user = await User.findById(request.params.id);
        if (!user) {
            return response.status(400).send({
                error: 'No user found with this ID'
            });
        }

        return response.status(200).send(user);
    }

    static async delete(request: express.Request, response: express.Response) {
        const user = await User.findByIdAndDelete(request.params.id);

        return response.status(200).send(user);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const users = await User.find();

        return response.status(200).send(users);
    }
}