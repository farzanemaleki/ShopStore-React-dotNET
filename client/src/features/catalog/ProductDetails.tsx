import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";
import agent from "../../app/api/agent";

export default function ProductDetails () {
    const {id} = useParams<{id : string}>();
    const [product, setProduct] = useState<Product | null>(null); 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (id) {
        const productId = parseInt(id, 10);
        agent.Catalog.details(productId)
        .then(response => setProduct(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
        }
    }, [id])

    if(loading) {return( <h1>Loading ...</h1>);};
    if(!product) {return( <h1>Product not found !!!</h1>);};
    
    return(
        <>
        <Grid container spacing={12}>
            <Grid item xs={6}>
               <img src={product.pictureUlr} alt={product.name} style={{ width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{ mb:1 }}/>
                <Typography variant="h4" color="secondary">Price: ${(product.price/100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
           
        </Grid>
        </>
    );
}