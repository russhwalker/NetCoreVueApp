import { Car } from "./car";
import { Make } from "./make";
import { Model } from "./model";

export interface CarViewModel {
    car: Car;
    makes: Make[];
    models: Model[];
}