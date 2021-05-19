import { Request, Response, NextFunction } from 'express';
import PrettyError from '../utils/error';

export default function ErrorHandler (err: PrettyError, req: Request, res: Response, next: NextFunction) {
    // console.error(err.message);
    // console.log('oi');
    return res.status(err.status).send(err.message);  
}

export function PageNotFound (req: Request, res: Response, next: NextFunction) {
    let err = new PrettyError({ message: 'Page Not Found', status: 404 });
    next(err);
}