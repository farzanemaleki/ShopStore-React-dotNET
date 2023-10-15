import { Button } from "@mui/material"
import { Product } from "../../app/models/Product"
import ProductList from "./ProductList"

interface Props {
    products: Product[],
    AddProduct: () => void
}

export default function Catalog ({products, AddProduct}: Props) {
return(
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={AddProduct}>Add Product</Button>
    </>
)
}