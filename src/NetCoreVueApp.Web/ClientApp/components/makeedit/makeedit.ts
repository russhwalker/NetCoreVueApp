import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Make } from '../../interfaces/make';

@Component
export default class MakeEditComponent extends Vue {
    loaded: boolean = false;
    editing: boolean = false;
    make: Make | undefined;

    toggleEditing(event: any) {
        this.editing = !this.editing;
    }

    handleSave(event: any) {
        this.editing = false;
        var body = JSON.stringify(this.make);
        fetch('api/Makes/Save', {
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
                this.$router.push('/makes');
            })
            .catch(() => {
                this.editing = true;
                alert('ERROR');
            });
    }

    mounted() {
        fetch('api/Makes/MakeEdit/' + this.$route.params.id)
            .then(response => response.json() as Promise<Make>)
            .then(data => {
                this.make = data;
                this.loaded = true;
            })
            .catch(() => {
                alert('ERROR!');
            });
    }
}