$(document).ready(function(){
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

	// Add submitted item to list
	$(document).on("submit", ".add", function(event){ //Must use on() to bind to new ".add" items
		// stop submit from refreshing the page
		event.preventDefault();

		// Get new item to add
		var newItemData = $(".add [name='item']").val();

		// Delete Add Item
		$("#list li:last-child").remove();

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
	
	// If the user clicks away when adding an item
	$(document).on("focusout", ".add", function(){
		cancelAdd();
	});

	// If the user 'escapes' from adding an item
	$(document).on("keyup", ".add", function(event){
		if(event.keyCode === 27){
			cancelAdd();
		}
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

	// Delete an item


});

function cancelAdd(){
	$(".add").empty();
	$(".add").append("Add Item");
}