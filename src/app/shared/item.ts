export interface Item {
    _id: string;
    userId: string;
    title: string;
    subtitle: string;
    slug: string;
    category: string;
    covers?: Cover[];
    numLikes: number;
    numDislikes: number;
    numViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Cover {
    type: string;
    filename: string;
    sizes: number[];
}
