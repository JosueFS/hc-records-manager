const formprod = document.getElementById('formProd')

formprod.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value
    let quantidade = document.getElementById('quantidade').value
    let preco = document.getElementById('preco').value
    let data = {
        name,
        quantidade,
        preco,
    }


    let products = [];
    
    let tempProducts = localStorage.getItem('@HCManager:Produtos');
    
    if (tempProducts) products.push(tempProducts);
    
    products.push(JSON.stringify(data));
    
    localStorage.setItem('@HCManager:Produtos', products);

})
