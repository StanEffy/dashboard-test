interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: UserAddress;
}
export interface UserContextProps {
    users: User[];
    isLoading: boolean;
    error: string | null;
}