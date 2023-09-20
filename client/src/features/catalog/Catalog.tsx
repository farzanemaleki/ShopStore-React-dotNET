import { Product } from "../../app/models/Product"

interface Props {
    products: Product[],
    AddProduct: () => void
}

export default function Catalog ({products, AddProduct}: Props) {
return(
    <>
    <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} with price ${product.price}</li>
        ))}
      </ul>
      <button onClick={AddProduct}>Add Product</button>
    </>
)
}