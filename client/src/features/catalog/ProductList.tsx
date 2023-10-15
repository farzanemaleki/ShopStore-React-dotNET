import { List } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

interface props {
products: Product[]
}
export default function ProductList ({products}: props){
return(
<>
    <List>
        {products.map((product) => (
            <ProductCard product={product} key={product.id} />
        ))}
    </List>
</>
);
}
