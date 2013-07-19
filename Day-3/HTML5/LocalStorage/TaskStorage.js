var taskStoragePrototype = {
	addTask : function (taskName){
		var taskId = new Date().getTime().toString();
		this.storage.setItem(taskId,taskName);
		return {id : taskId, name : taskName}
	},

	getAllTasks : function(){
		var tasks = [];
		for(var member in this.storage){
			var taskId = member,
				taskName = this.storage.getItem(taskId);
			var task = {id : taskId, name : taskName};
			tasks.push(task);
		}
		return tasks;
	},

	removeTask : function(taskId){
		this.storage.removeItem(taskId);
	}
};
function TaskStorage(storageOption){
	this.storage = storageOption;
}
TaskStorage.prototype = taskStoragePrototype;