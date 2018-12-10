import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Car } from '../../interfaces/car';

@Component
export default class ModelsComponent extends Vue {
    cars: Car[] = [];
    visibleCarsOnly: boolean = false;

    mounted() {
        fetch('api/Cars/Inventory/' + this.visibleCarsOnly)
            .then(response => response.json() as Promise<Car[]>)
            .then(data => {
                this.cars = data;
            });
    }
}