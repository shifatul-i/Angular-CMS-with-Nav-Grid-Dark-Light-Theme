export interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePics: Picture[];
    about: string;
    gender: number;
    dob: string;
    country: string;
    phone: string;
}

interface Picture {
    filename: string;
    sizes: number[];
}
