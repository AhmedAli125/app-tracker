import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UpdateButton from '../../../../ui/button/updateButton/UpdateButton';
import AdminContext from '../../../../../context/admin/AdminContext'
import './member.css';

function Member({data}) {

    const adminContext = useContext(AdminContext);
    const { openEditMemberModalHandler } = adminContext;

    const useStyles = makeStyles({
        root: {
            Width: 275,
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
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1)} {data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1)}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Typography variant='subtitle2' component='p'>
                        Organization: {data.organization}
                    </Typography>
                    <Typography variant='subtitle2' component='p'>
                        Designation: {data.designation.charAt(0).toUpperCase() + data.designation.slice(1)}
                    </Typography>
                </Typography>
                <Typography variant="subtitle2" component="p">
                    Register Date: {data.regDate}
                </Typography>
            </CardContent>
            <div className='icon-button'>
                <UpdateButton clicked={openEditMemberModalHandler} />
            </div>
        </Card>
    );
}

export default Member;
