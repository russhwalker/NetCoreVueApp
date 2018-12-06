import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Make {
    makeId: number;
    makeName: string;
}

@Component
export default class MakeEditComponent extends Vue {
    loaded: boolean = false;
    editing: boolean = false;
    make: Make | undefined;

    toggleEditing() {
        this.editing = !this.editing;
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