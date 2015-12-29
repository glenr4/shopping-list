$(document).ready(function(){

	// Allow user entry and submit on Add item
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
		// console.log(".add click event fired");
	});
});