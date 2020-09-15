export class ToDo {
    id?: number;
    taskName: string;
    taskDescription: string;
    targetDate: Date;
    completed: boolean;

    constructor(taskName, taskDescription, targetDate) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.targetDate = targetDate;
        this.completed = false;
    }
}
