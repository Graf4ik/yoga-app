export interface addressType {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface contactType {
    id: string;
    name: string;
    email: string;
    address: addressType;
}

export interface postType {
    title: string;
    body: string;
}

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
