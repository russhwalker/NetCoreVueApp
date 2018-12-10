import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ModelViewModel } from '../../interfaces/modelViewModel';
import { Model } from '../../interfaces/model';
import { Make } from '../../interfaces/make';

@Component
export default class ModelEditComponent extends Vue {
    loaded: boolean = false;
    editing: boolean = false;
    isNew: boolean = false;
    model: Model | undefined;
    makes: Make[] | undefined;

    toggleEditing(event: any) {
        this.editing = !this.editing;
    }

    handleSave(event: any) {
        this.editing = false;
        var body = JSON.stringify(this.model);
        fetch('api/Models/Save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        }).then(response => {
            response.json();
        })
            .then(() => {
                this.$router.push('/models');
            })
            .catch(() => {
                this.editing = true;
                alert('ERROR');
            });
    }

    mounted() {
        var modelId = parseInt(this.$route.params.id, 10);
        this.isNew = modelId === 0;
        fetch('api/Models/ModelEdit/' + modelId)
            .then(response => response.json() as Promise<ModelViewModel>)
            .then(data => {
                this.makes = data.makes;
                this.model = data.model;
                this.loaded = true;
                this.editing = this.isNew;
            })
            .catch(() => {
                alert('ERROR!');
            });
    }
}