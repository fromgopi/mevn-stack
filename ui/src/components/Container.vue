<template>
    <div>
        <Header />
        <Tasks :TaskList="Tasklists" :Delete="Delete"></Tasks>
    </div>
</template>

<script>
import Tasks from './Tasks.vue';
import Header from './Header.vue';
import { ref } from "@vue/runtime-core";
export default {
    components: {
        Tasks,
        Header
    },
    setup() {
        const example = [
            {id: 1, name: 'Cooking food', status: 'inProgress'},
            {id: 2, name: 'Cleaning house', status: 'todo'},
            {id: 3, name: 'Washing cloths', status: 'todo'},
            {id: 4, name: 'Cutting Veg', status: 'inProgress'},
        ];
        return {
            Tasklists: ref(example)
        }
    },
    methods: {
        Delete(idx) {
            this.Tasklists = this.Tasklists.filter((r) => r.id !== idx)
        }
    }
}
</script>
