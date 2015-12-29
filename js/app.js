$(document).ready(function(){
	// Global variables
	var newItem = "";

	// Create form to allow user entry to Add item
	$(".add").click(function(){
		// Clear contents
		$(".add").empty();
		// Create a form and input field
		var addForm = $("<form>").append(
			$("<input>",{
				"name": "item",
				"type": "text"
			})
		);
		addForm.appendTo(".add");
		$(".add [name='item']").focus();
	});

	// Add submitted item to list
	$(".add").submit(function(event){
		// stop submit from refreshing the page
		event.preventDefault();

		// Append new item to list
		$("#list ul").append(
		$("<li class=unchecked>").append(
				$(".add [name='item']").val()));	
	});
	






});

