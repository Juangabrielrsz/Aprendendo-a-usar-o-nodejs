const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());


const products = [];

/**
 * Post => para inserir um dados
 * Get => para buscar um ou mais dados
 * Put => para alterar um dados
 * Delete => Remover uns dados
 */

/**
 * BODY => Sempre que eu quiser enviar dados para minha aplicação
 * PARAMS => /products / id parametro de rota
 * Query => /products?id=1092938&value=0292109
 */

app.post("/product", (request, response) => {
    /**NOME E PREÇO */
    const {name, price } = request.body;

    const product = {
        name, 
        price,
        id: randomUUID(),
    };

    products.push(product);

    return response.json(product);

});

app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) =>{
    const {id} = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
});

app.put("/products/id", (request, response) =>{
    const { id } = request.params;
    const {name, price } = request.body;

    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
    };
    
    return response.json({message : "Produto alterado com sucesso"});
});


app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));