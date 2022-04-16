const { connection, disconnection } = require('../config/db.config')
const { Task } = require('../model/task.model')
const logger = require('../logger/api.logger');

class TaskRepo {
    constructor() {
        connection()
    }

    async getAllTasks() {
        const tasks = await Task.find()
        console.log('tasks:::', tasks)
        return tasks
    }
}

module.exports = new TaskRepo();