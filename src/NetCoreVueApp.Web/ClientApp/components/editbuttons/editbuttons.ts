import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    props: {
        isNewCancelRedirect: {
            type: String,
            required: true
        },
        isNew: {
            type: Boolean,
            required: true
        },
        isEditing: {
            type: Boolean,
            required: true
        }
    }
})
export default class EditButtonsComponent extends Vue {

}