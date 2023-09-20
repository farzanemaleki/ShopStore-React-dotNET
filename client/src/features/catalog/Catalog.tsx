import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { Product } from "../../app/models/Product"

interface Props {
    products: Product[],
    AddProduct: () => void
}

export default function Catalog ({products, AddProduct}: Props) {
return(
    <>
    <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUlr}></Avatar>
            </ListItemAvatar>
            <ListItemText>
              {product.name} with Price ${product.price}
            </ListItemText>
          </ListItem>
        ))}
    </List>
      <Button variant="contained" onClick={AddProduct}>Add Product</Button>
    </>
)
}