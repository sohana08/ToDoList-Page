//clicking on specific todo in the list
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//deleting the x from the span
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//when input is given or the new todo is written it should be listed along with the <li>s
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
       //extract the input
       var toDoText=$(this).val();
       $(this).val("");
       //create the new li and add the above text in the ul
       $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText+ "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})