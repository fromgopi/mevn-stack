<template>
    <ul >
        <li v-for="(task, index) in TaskList" :key="index">
            <span>{{task.name}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        TaskList: Array,
        Delete: Function
    }
    
}
</script>