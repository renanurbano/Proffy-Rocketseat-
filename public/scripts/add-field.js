//procurar o botao
document.querySelector("#add-time")

//quando clicar no botao
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //duclicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field){
        field.value = ""
    })

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}