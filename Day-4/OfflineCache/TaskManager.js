
(function(){
	var taskStorage = new TaskStorage(window.localStorage);
	function onBtnAddTaskClick(){
		var taskName = $("#txtTask").val();
		var newTask = taskStorage.addTask(taskName);
		addTaskToUi(newTask);
		displayMessage("A new task is added");
	}
	function addTaskToUi(task){
		var $newTaskLi = $("<li>")
				.html(task.name)
				.addClass(task.isCompleted ? "completed" : "")
				.attr("task-id",task.id);

			$("#ulTaskList").append($newTaskLi);
	}
	function onTaskItemClick(){
		$(this).toggleClass("completed");
		taskStorage.toggleCompletion($(this).attr("task-id"));
	}
	function onBtnRemoveCompletedClick(){
		$("#ulTaskList > li.completed")
			.each(function(index,taskLi){
				var taskId = $(taskLi).attr("task-id");
				taskStorage.removeTask(taskId);
			}).fadeOut(function(){ $(this).remove();});
		displayMessage("One or more tasks are removed");
	}
	function displayMessage(msg){
		$("#divMessage")
			.hide()
			.html(msg)
			.fadeIn('medium')
			.delay(3000)
			.fadeOut('medium');
	}
	$(function(){
		$("#btnAddTask").on("click",onBtnAddTaskClick);
		$("#btnRemoveCompleted").on("click",onBtnRemoveCompletedClick);
		$("#ulTaskList").on("click","li",onTaskItemClick);
		var tasks = taskStorage.getAllTasks();
		for(var index in tasks){
			addTaskToUi(tasks[index]);
		}
	});
})();	

