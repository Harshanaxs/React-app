import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
 
  const classes = useStyles();

  return (
    <Box ml={1} mt={2}   >
    <Card className={classes.root }  width={200}  >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2"  component="h2">
            By {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More Details
        </Button>
        
        <Button>
        <a href={props.amazonLink} target="_blank" rel="noreferrer">Buy It Now</a>

        </Button>
     
      </CardActions>
    </Card>
    </Box>    
  );
}