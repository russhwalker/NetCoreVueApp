import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ModelRow } from '../../interfaces/modelRow';

@Component
export default class ModelsComponent extends Vue {
    models: ModelRow[] = [];

    mounted() {
        fetch('api/Models/GetModelRows')
            .then(response => response.json() as Promise<ModelRow[]>)
            .then(data => {
                this.models = data;
            });
    }
}