import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/Product";

interface Props {
    product: Product;
}
export default function ProductCard({product}: Props ) {
    return(
        <>
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUlr}></Avatar>
            </ListItemAvatar>
            <ListItemText>
                {product.name} with Price ${product.price}
            </ListItemText>
        </ListItem>
        </>
    );
}