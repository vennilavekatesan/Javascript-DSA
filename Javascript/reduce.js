// using reduce grouping products in a shopping cart according to their brand name;

const products=[
    {name:'Laptop', brand:'Dell'},
    {name:'Phone', brand:'Apple'},
    {name:'Monitor', brand:'Dell'},
    {name:'Laptop', brand:'Apple'},
    {name:'Tablet', brand:'Samsung'},
    {name:'Phone', brand:'Samsung'},
]

const groupedProducts = products.reduce((productgrp, product)=>{
    const name = product.name;
    if(productgrp[name]===undefined){
        productgrp[name]=[];
    }
    productgrp[name].push(product);
    return productgrp;
},{})


console.log(groupedProducts);


// basic method without reduce

const products2 = {};
products.forEach((product)=>{
    const name=product.name;
    if(products2[name]){
        products2[name].push(product);
    }
    else{
        products2[name]=[product];
    }
})

console.log(products2);
