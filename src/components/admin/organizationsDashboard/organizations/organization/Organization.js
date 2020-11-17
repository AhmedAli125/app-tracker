import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AdminContext from '../../../../../context/admin/AdminContext';

function Organization() {

    const adminContext = useContext(AdminContext);
    const { openSoftwareHouseModalHandler } = adminContext;

    const useStyles = makeStyles({
        root: {
            // minWidth: 275,
            // Width: 500,
            // maxWidth: 275,
            // height: 150
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
            marginBottom: 12,
            marginTop: 12,
        },
        textJustify: {
            textAlign: "justify",
            textTransform: 'none'
        }
    });

    const classes = useStyles();

    return (
        <Button className={classes.textJustify} onClick={openSoftwareHouseModalHandler}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        Organization Name
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Email
                    </Typography>
                    <Typography variant="body2" component="p">
                        Address
                    </Typography>
                </CardContent>
            </Card>
        </Button>
    );
}

export default Organization;
