import React, { useState} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    rootContainer: {
        backgroundColor: 'red',
        marginTop:'2%'
    },
    root: {
        minWidth: 200,
        maxWidth: 1000,
        maxHeight: 1000,
        minHeight: 200,
        margin: '0.5% 20% 0.5% 26%',
        backgroundColor: 'blue'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginLeft: 12,
        marginTop: 12,
        fontWeight: 500
    },
    media: {
        height: 140,
        width: 140,
        marginRight: 10,
        cursor:'pointer'
    },
});
export const CardSearchItemComponent = ()=> {
    const classes = useStyles();

    return (
        <div className={classes.rootContainer}>
            <div className={classes.root} >
                <CardContent>
                    <Grid container>
                        <div >
                            <CardMedia
                                className={classes.media}
                                image="https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg"
                                title="Contemplative Reptile"
                                onClick={()=>{alert('imagen')}}
                            />
                        </div>
                        <div >
                            {/*<Typography className={classes.pos} color="textSecondary">*/}
                            {/*    adjective*/}
                            {/*</Typography>*/}
                            <Typography className={classes.pos} >
                                $ 5.000.000
                            </Typography>

                            <CardActions>
                                <Button size="small">Pc Torre Gamer Ryzen 3 3200g A320m Ssd 240gb Ram 8gb Mon 22</Button>
                            </CardActions>
                        </div>

                    </Grid>


                </CardContent>

            </div>
            <div className={classes.root} >
                <CardContent>
                    <Grid container>
                        <div >
                            <CardMedia
                                className={classes.media}
                                image="https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg"
                                title="Contemplative Reptile"
                                onClick={()=>{alert('imagen')}}
                            />
                        </div>
                        <div >
                            {/*<Typography className={classes.pos} color="textSecondary">*/}
                            {/*    adjective*/}
                            {/*</Typography>*/}
                            <Typography className={classes.pos} >
                                $ 5.000.000
                            </Typography>

                            <CardActions>
                                <Button size="small">Pc Torre Gamer Ryzen 3 3200g A320m Ssd 240gb Ram 8gb Mon 22</Button>
                            </CardActions>
                        </div>

                    </Grid>


                </CardContent>

            </div>

            <div className={classes.root} >
                <CardContent>
                    <Grid container>
                        <div >
                            <CardMedia
                                className={classes.media}
                                image="https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg"
                                title="Contemplative Reptile"
                                onClick={()=>{alert('imagen')}}
                            />
                        </div>
                        <div >
                            {/*<Typography className={classes.pos} color="textSecondary">*/}
                            {/*    adjective*/}
                            {/*</Typography>*/}
                            <Typography className={classes.pos} >
                                $ 5.000.000
                            </Typography>

                            <CardActions>
                                <Button size="small">Pc Torre Gamer Ryzen 3 3200g A320m Ssd 240gb Ram 8gb Mon 22</Button>
                            </CardActions>
                        </div>

                    </Grid>


                </CardContent>

            </div>

            <div className={classes.root} >
                <CardContent>
                    <Grid container>
                        <div >
                            <CardMedia
                                className={classes.media}
                                image="https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg"
                                title="Contemplative Reptile"
                                onClick={()=>{alert('imagen')}}
                            />
                        </div>
                        <div >
                            {/*<Typography className={classes.pos} color="textSecondary">*/}
                            {/*    adjective*/}
                            {/*</Typography>*/}
                            <Typography className={classes.pos} >
                                $ 5.000.000
                            </Typography>

                            <CardActions>
                                <Button size="small">Pc Torre Gamer Ryzen 3 3200g A320m Ssd 240gb Ram 8gb Mon 22</Button>
                            </CardActions>
                        </div>

                    </Grid>


                </CardContent>

            </div>

        </div>

    // <Card className={classes.root} variant="outlined">
    //         <CardContent>
    //             <CardMedia
    //                 className={classes.media}
    //                 image="https://http2.mlstatic.com/D_765294-MLA31117482682_062019-I.jpg"
    //                 title="Contemplative Reptile"
    //             />
    //             <CardActions>
    //                 <Button size="small">titulo del articulo</Button>
    //             </CardActions>
    //             <Typography variant="h5" component="h2">
    //                 be{bull}nev{bull}o{bull}lent
    //             </Typography>
    //             <Typography className={classes.pos} color="textSecondary">
    //                 adjective
    //             </Typography>
    //             <Typography variant="body2" component="p">
    //                 well meaning and kindly.
    //                 <br />
    //                 {'"a benevolent smile"'}
    //             </Typography>
    //         </CardContent>
    //
    //     </Card>
    )
}