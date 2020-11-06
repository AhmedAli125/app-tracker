import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Project() {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          maxWidth: 350
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
        },
        textJustify: {
          textAlign: "justify",
          textTransform: 'none'
        }
      });

const classes = useStyles();

  return (
    // <div className='projects'>
      <Button className={classes.textJustify}>
    <Card className={classes.root}>
      <CardContent>
         <Typography variant="h6" component="h2">
          Project Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography variant="body2" component="p">
          Date
        </Typography>
      </CardContent>
    </Card>
    </Button>
    // </div>
  );
}

export default Project
