import express from "express";
import Menu from "../models/Menu";

export default class MenuController {
    static async createMenu(request: express.Request, response: express.Response) {
        const menu = await Menu.create({
            status: request.body.status,
            isActivated: request.body.isActivated,
        });

        await menu.save();

        return response.status(200).send(menu);
    }

    static async update(request: express.Request, response: express.Response) {
        const menu = await Menu.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { useFindAndModify: false, new: true }
        )

        return response.status(200).send(menu);
    }

    static async get(request: express.Request, response: express.Response) {
        const menu = await Menu.findById(request.params.id);
        if (!menu) {
            return response.status(400).send({
                error: 'No menu found with this ID'
            });
        }

        return response.status(200).send(menu);
    }

    static async delete(request: express.Request, response: express.Response) {
        const menu = await Menu.findByIdAndDelete(request.params.id);

        return response.status(200).send(menu);
    }

    static async getAll(request: express.Request, response: express.Response) {
        const menus = await Menu.find();

        return response.status(200).send(menus);
    }
}