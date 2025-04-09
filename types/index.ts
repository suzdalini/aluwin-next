export interface MenuItem {
    title: string;
    url: string;
}

export interface System {
    id: string;
    name: string;
    title: string;
    img: string;
    url: string;
    text: string;
}

export interface Work {
    id: number;
    name: string;
    url: string;
    images_count: number;
    category: string;
}
