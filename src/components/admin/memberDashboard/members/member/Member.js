import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UpdateButton from '../../../../ui/button/updateButton/UpdateButton';
import './member.css';

function Member() {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            maxWidth: 275,
            height: 150
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
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    Member Name
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Typography variant='subtitle2' component='p'>
                        Organisation Name:
                    </Typography>
                    <Typography variant='subtitle2' component='p'>
                        Member Dasignation :
                    </Typography>
                </Typography>
                <Typography variant="subtitle2" component="p">
                    Register Date:
                </Typography>
            </CardContent>
            <div className='icon-button'>
                <UpdateButton clicked={() => { alert('updatev BUtton'); }} />
            </div>
        </Card>
    );
}

export default Member;
