import React from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography
} from "@material-ui/core";
import {useStyleItemDetail} from "./card-item-detail.style";


export const CardItemDetail = () => {
    const classes = useStyleItemDetail();
    //todo hacer q cambie el titulo segun el producto
    window.document.title = 'Tu titulo';
//todo sacar todo en un objeto q me de los datos

    return (
        <Card className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    <picture>
                        <source srcSet={''} media={'(min-width: 100px)'}/>
                        <img className={classes.img}
                             src={'https://http2.mlstatic.com/D_765294-MLA31117482682_062019-O.jpg'} alt={''}/>
                    </picture>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardContent className={classes.cardPrice}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Nuevo - 234 vendidos
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Deco - revert Sombrero Oxford
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            $ 80000 <span className={'decimal'}>00</span>
                        </Typography>
                        {/*todo revisar lo q puede ir en i18n*/}
                        <Button variant="contained" className={classes.buttonBuy} color="primary" disableElevation>
                            Comprar
                        </Button>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CardContent className={classes.cardDetail}>
                        <Typography variant="h5" gutterBottom>
                            Descripcion del producto
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}
