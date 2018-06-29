import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import withTheme from '@material-ui/core/styles/withTheme';


const styles = {
  card: {
    heigth :'30%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="carte">
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="title" gutterBottom>
        Nom du project
      </Typography>

          <Typography>
            <TextField
          id="multiline-flexible"
          label="Description Project"
          multiline
          rows="4"
          // defaultValue="yolo"
          // onChange={thiPasswords.handleChange('multiline')}
          className='yolo'
          margin="normal"
        />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            
          </Typography>

          
         
        </CardContent>
        
      </Card>
    </div>
    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);