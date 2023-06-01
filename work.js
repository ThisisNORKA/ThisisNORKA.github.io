text_field = document.querySelector('input')
h1_text = document.querySelector('h1')
function change_text(){
    console.log(h1_text)
    console.log(text_field)
    h1_text.innerHTML = text_field.value + " Andrey"
}

button = document.querySelector('button');
button.addEventListener("click", change_text)