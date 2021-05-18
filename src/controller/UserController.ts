import express from "express";
import User from "../models/User";
// import ErrorHandler from "../middlewares/errorHandling"
import PrettyError from '../utils/error'
export default class UserController {
    static async createUser(request: express.Request, response: express.Response, next: express.NextFunction) {
        await User.create({
            username: request.body.username,
            password: request.body.password,
            email: request.body.email
        })
        .then(user => {
            return response.status(200).send(user);
        })
        .catch(err => {
            return next(new PrettyError({
                status: 400,
                err
            }))
        });
    }

    static async update(request: express.Request, response: express.Response, next: express.NextFunction) {
        await User.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { runValidators: true, useFindAndModify: false, new: true }
        )
        .then(user => {
            return response.status(200).send(user);
        })
        .catch(err => {
            return next(new PrettyError({
                status: 400,
                err
            }))
        });
    }

    static async get(request: express.Request, response: express.Response, next: express.NextFunction) {
        await User.findById(request.params.id)
        .then(user => {
            return response.status(200).send(user);
        })
        .catch(err => {
            return next (new PrettyError({
                status: 400,
                err
            }));
        });
    }

    static async delete(request: express.Request, response: express.Response, next: express.NextFunction) {
        await User.findByIdAndDelete(request.params.id)
        .then(user => {
            return response.status(200).send(user);
        })
        .catch(err => {
            return next (new PrettyError({
                status: 400,
                err
            }));
        })

    }

    static async getAll(request: express.Request, response: express.Response, next: express.NextFunction) {
        await User.find()
        .then(users => {
            return response.status(200).send(users);
        })
        .catch(err => {
            return next (new PrettyError({
                status: 400,
                err
            }));
        })
    }
}