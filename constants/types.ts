export interface socialsType {
    id: number;
    icon: string;
    path: string;
}

export interface IFormContact {
    name: string;
    tel: string;
    email: string;
    message: string;
}

export interface Navigation {
    id: number,
    title: string,
    path: string
}

export interface Photo {
    src: string;
    width: number;
    height: number;
}
