import axios from 'axios'

const url="http://localhost:8000"

const getProducts=(setProduct)=>{
    axios
    .get(`${url}/products`)
    .then(({data})=>{
        console.log("Data---->",data);
        setProduct(data)
    })
}

export {getProducts}
