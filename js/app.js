$(document).ready(function(){
	// Global variables
	// var newItem = "";

	// Create form to allow user entry to Add item
	$(document).on("click", ".add", function(){ //Must use on() to bind to new ".add" items
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

	// If user 'escapes' from adding an item



	// Add submitted item to list
	$(document).on("submit", ".add", function(event){ //Must use on() to bind to new ".add" items
		// stop submit from refreshing the page
		event.preventDefault();

		// Get new item to add
		var newItemData = $(".add [name='item']").val();

		// Delete Add Item
		$("#list li:last-child").remove();

		// Append new item to list (removed, use DOM object instead)
		// $("#list ul").append(
		// $("<li class=unchecked>").append(newItemData));	

		// Append new item to list
		var newItem = $("<li class='unchecked'>").append(newItemData);
		newItem.hide(); //hide to allow fadeIn
		newItem.appendTo("#list ul");
		newItem.fadeIn(800);

		// Recreate Add Item and slide down from under the appended item above
		var addItem = $("<li class='add'>").append("Add Item");
		addItem.css("margin-top","-35px");
		addItem.appendTo("#list ul");
		addItem.animate({"margin-top":"5px"}, 800);
	});
	
	// Check off an item
	$(document).on("click", ".unchecked", function(){
		$(this).fadeOut(800, function(){
			$(this).attr("class", "checked").fadeIn(800);
		});
	});

	// Uncheck an item
	$(document).on("click", ".checked", function(){
		$(this).attr("class", "unchecked");
	});




});

