import { Make } from "./make";
import { Model } from "./model";

export interface ModelViewModel {
    model: Model;
    makes: Make[];
}