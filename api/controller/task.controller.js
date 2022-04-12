const taskService  = require('../service/task.service');
const logger = require('../logger/api.logger');

class TodoController {
    constructor() {}

    async getTasks() {
        logger.info('Controller: getTasks')
        return await taskService.getTask();
    }
}

module.exports = new TodoController();