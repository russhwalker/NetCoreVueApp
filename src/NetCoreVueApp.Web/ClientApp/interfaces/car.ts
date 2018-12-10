export interface Car {
    carId: number;
    modelId: number;
    year: number;
    price: number;
    note: string;
    visible: boolean;

    priceFormatted: number;
    makeId: number;
    makeName: string;
    modelName: string;
}