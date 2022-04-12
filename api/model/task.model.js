const Mongoose = require('mongoose');

const taskSchema = new Mongoose.Schema({ task: 'string', 
    assignee: 'string', 
    status: 'string', 
    createDate: 'date', 
    updatedDate: 'date', 
    createdBy: 'string', 
    updatedBy: 'string' },
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}
});

const Task = Mongoose.model('tasks', taskSchema);

module.exports = {
    Task
}