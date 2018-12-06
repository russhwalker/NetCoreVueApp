import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Make {
    makeId: number;
    makeName: string;
}

@Component
export default class MakesComponent extends Vue {
    makes: Make[] = [];

    mounted() {
        fetch('api/Makes/GetMakes')
            .then(response => response.json() as Promise<Make[]>)
            .then(data => {
                this.makes = data;
            });
    }
}