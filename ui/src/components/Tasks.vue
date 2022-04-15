<template>
    <ul >
        <li v-for="(task, index) in TaskList" :key="index">
            <span class="span-space">{{index}}</span>
            <span class="span-space">{{task.name}}</span>
            <span>{{task.status}}</span>
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

<style scoped>
.span-space {
    margin-right: 10px;
}
</style>