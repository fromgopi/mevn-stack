const taskRepo = require('../repo/task.repo');

class TaskService {

    constructor() {}

    async getTask() {
        return await taskRepo.getAllTasks();
    }
}

module.exports = new TaskService();