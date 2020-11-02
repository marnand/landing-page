const form = document.forms.registration // registration é o name da form

form.addEventListener('submit', () => {
    //e.preventDefault() // serve para impedir que a tag com type submit atualize a página, que é seu comportamento padrão

    const {name, email, phone} = form // form recebe os elementos HTML
    //console.log(name.value, email.value, phone.value)

    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('phone', phone.value)

    alert("Seus dados nome: "+ name.value+", email: "+email.value+", telefone: "+phone.value +" foram enviados ao localStorage.")
})