console.log("Todo app");

function createTodo(){
    console.log("Button Clicked");
let text= $('#textTodo').val();//read the text/val from controls

let syntax=`
<div class='todo-item'>
 <h5>${text}</h5>
<button class='btn btn-sm btn-danger'>Remove</button>
</div>`;

$('#todoContainer').append(syntax);

//clear input field
$('#textTodo').val('');//write the text/val to the control 
$('#textTodo').focus();

}
function deleteTodo() {
    console.log("delete press");
    $(this).parent().remove();

}

//bottom
function init(){
    console.log("Todo app")
    //load previous data
    //hook events
    $('#btnSave').click(createTodo);

    $('#todoContainer').on('click',".btn-danger", deleteTodo);

    $('#textTodo').keypress(function(args) {
      if(args.key === "Enter"){
            createTodo();
        }
    });
}



window.onload = init;