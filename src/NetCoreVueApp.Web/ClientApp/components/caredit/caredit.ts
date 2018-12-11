import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { CarViewModel } from '../../interfaces/carViewModel';
import { Model } from '../../interfaces/model';
import { Make } from '../../interfaces/make';
import { Car } from '../../interfaces/car';

@Component({
    components: {
        EditButtonsComponent: require('../editbuttons/editbuttons.vue.html')
    }
})
export default class CarEditComponent extends Vue {
    loaded: boolean = false;
    editing: boolean = false;
    isNew: boolean = false;
    car: Car | undefined;
    filteredModels: Model[] = [];
    models: Model[] | undefined;
    makes: Make[] | undefined;

    toggleEditing(event: any) {
        this.editing = !this.editing;
    }

    handleSave(event: any) {
        this.editing = false;
        fetch('api/Cars/Save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.car)
        }).then(response => {
            response.json();
        })
            .then(() => {
                this.$router.push('/cars');
            })
            .catch(() => {
                this.editing = true;
                alert('ERROR');
            });
    }

    handleMakeChange(event: any) {
        var makeId = (this.car || { makeId: 0}).makeId;
        this.setFilteredModels(makeId);
    }

    setFilteredModels(makeId: number) {
        this.filteredModels = (this.models || []).filter(m => m.makeId === makeId);
    }

    mounted() {
        var carId = parseInt(this.$route.params.id, 10);
        this.isNew = carId === 0;
        fetch('api/Cars/CarEdit/' + carId)
            .then(response => response.json() as Promise<CarViewModel>)
            .then(data => {
                this.car = data.car;
                this.makes = data.makes;
                this.models = data.models;
                var model = data.models.filter(m => m.modelId === data.car.modelId);
                this.car.makeId = (model && model.length > 0) ? model[0].makeId : 0;
                this.setFilteredModels(this.car.makeId);
                this.loaded = true;
                this.editing = this.isNew;
            })
            .catch(() => {
                alert('ERROR!');
            });
    }
}