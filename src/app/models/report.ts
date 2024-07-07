import { User } from "./authentication";

export enum Status {
    PENDIENTE = 'Pendiente',
    RESUELTO = 'Resuelto',
    CANCELADO = 'Cancelado',
}

export interface Report {
    id?: number;
    title: string;
    category: string;
    description: string;
    status: Status;
    created_at: Date;
    user: User;
}