const form = document.getElementById('formClient')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cidade = document.getElementById('cidade').value
    let endereco = document.getElementById('endereco').value
    let data = {
        nome,
        email,
        telefone,
        cidade,
        endereco,
    }

    let customers = [];
    customers.push(JSON.stringify(data));

    let tempCustomers = localStorage.getItem('@HCManager:Cliente');

    if (tempCustomers) customers.push(tempCustomers);

    localStorage.setItem('@HCManager:Cliente', customers);

})
