const express = require("express");

const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    }
];

app.get("/products", (req, res) => {
    res.status(200).json(products)
})
app.get("/products/category/:categoryName", (req, res) => {
    const prodName = String(req.params.categoryName)
    const product = products.find(p => p.category.toLowerCase() === prodName.toLowerCase());
    if (!product) res.status(404).json({ error: "product name invalid" })
    res.status(200).json(product)
})


app.get("/products/:id", (req, res) => {
    const prodId = Number(req.params.id)
    const product = products.find(p => p.id === prodId)
    if (!product) req.status(404).json({ error: "product id invalid" })
        res.status(200).json(product)
})

app.post("/products",(req,res)=>{
    const prod=req.body;
    let prodDet={
        id:products.length,
        name:prod.name,
        price:prod.price,
        stock:prod.stock,
        rating:prod.rating,
    }
    products.push(prodDet)
    
    res.status(201).json({message:"product added in database", prodDet})
})

app.put("/products/:id",(req,res)=>{
    const det=req.body;
    const prodId = Number(req.params.id)
    const product = products.find(p => p.id === prodId)
    if (!product) res.status(404).json({ error: "product id invalid" })
    if(det.name) product.name=det.name;
    if(det.category) product.category=det.category;
    if(det.price) product.price=det.price;
    if(det.stock) product.stock=det.stock;
    if(det.rating) product.rating=det.rating;

    res.status(200).json({message:"product details updated", product})
})


app.put("/products/:id/price",(req,res)=>{
    const det=req.body;
    const prodId = Number(req.params.id)
    const product = products.find(p => p.id === prodId)
    if (!product) res.status(404).json({ error: "product id invalid" })
    if(det.price) product.price=det.price;
    res.status(200).json({message:"product details updated", product})
})


app.put("/products/:id/stock",(req,res)=>{
    const det=req.body;
    const prodId = Number(req.params.id)
    const product = products.find(p => p.id === prodId)
    if (!product) res.status(404).json({ error: "product id invalid" })
    if(det.stock) product.stock=det.stock;
    res.status(200).json({message:"product details updated", product})
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});