var taskStoragePrototype = {
	addTask : function (taskName){
		var taskId = new Date().getTime().toString();
		var newTask = {id : taskId, name : taskName, isCompleted : false}
		this.storage.setItem(taskId,window.JSON.stringify(newTask));
		return newTask;
	},

	getAllTasks : function(){
		var tasks = [];
		for(var member in this.storage){
			var taskId = member,
				taskAsString = this.storage.getItem(taskId);
			var task = window.JSON.parse(taskAsString);
			tasks.push(task);
		}
		return tasks;
	},

	toggleCompletion : function(taskId){
		var taskAsString = this.storage.getItem(taskId);
		var task = window.JSON.parse(taskAsString);	
		task.isCompleted = !task.isCompleted;
		this.storage.setItem(taskId,window.JSON.stringify(task));
	},

	removeTask : function(taskId){
		this.storage.removeItem(taskId);
	}
};
function TaskStorage(storageOption){
	this.storage = storageOption;
}
TaskStorage.prototype = taskStoragePrototype;