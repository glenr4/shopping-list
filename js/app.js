$(document).ready(function(){
	// Global variables
	var newItem = "";

	// Allow user entry to Add item
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

	// Get submitted item
	$(".add").submit(function(){

		newItem = $(".add [name='item']").val();
		

		// var newItem = $("<li class=unchecked>");
		// newItem.innerText = "test";
		// newItem.appendTo("#list ul");


		// $("#list ul").append("<li class='unchecked'>Test</li>");


		// $("#list ul").append($("<li>").attr("class","unchecked")).innerText("test");

	});

	// When the user hits enter, then add a new item
	$(document).keyup(function(event){
		// console.log("keyup" + event.keyCode);
		if (event.keyCode === 13){
			// console.log("enter");
			if ($(".add").focus()){
				// Create a new item
				// $("#list ul").append(
				// $("<li class=unchecked>").append(newItem));


			};
		};
	});

	

});