import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import MoreVertIcon from "material-ui-icons/MoreVert";
import App from "./App.js";


const styles = theme => ({
  card: {
    maxWidth: 400,
    borderRadius :'20px',
    background: '#EFEFEF',
    boxShadow:'10px 10px grey'
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'#9099A2',
  },
  divStyle: {
    display : 'inline-block',
    width :'25%',
    marginLeft:'2em',
    marginTop: '2em',
    marginBottom: '2em'
  },
  cardHeaderStyle: {
    textTransform: 'UpperCase',
    fontWeight:'bolder'
  }
});

class FortCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className= {classes.divStyle}>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeaderStyle}
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} >
                  R
              </Avatar>
            }
            action={
              <IconButton>
               
              </IconButton>
            }
            title={this.props.fort.name}
            subheader={this.props.fort.location}
          />
          <CardMedia
             className={classes.media}
             image={this.props.fort.image}
          />
          <CardContent>
            <Typography component="p">
              {/* Raigad is a hill fort situated in the Mahad, Raigad district of
              Maharashtra, India. Chhatrapati Shivaji Maharaj built this fort
              and made it his capital in 1674 when he was crowned as the King f
              a Maratha Kingdom which later developed into the Maratha Empire,
              eventually covering much of western and central India. */}
              {this.props.fort.information}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2" style={{fontWeight:'bold'}}>
                Information :
              </Typography>
              <Typography paragraph>
                The fort rises 820 metres (2,700 ft) above the sea level and is
                located in the Sahyadri mountain range.
              </Typography>
              <Typography paragraph>
                There are approximately 1737 steps leading to the fort. The
                Raigad Ropeway, an aerial tramway exists to reach the top of the
                fort in 10 minutes. The fort was looted and destroyed by the
                British after it was captured in 1818.
              </Typography>
              <Typography paragraph>
                After capturing Rairi from Chandrarao More, Chhatrapati Shivaji
                Maharaj also built another fort Lingana around 2 miles away from
                Raigad. The Lingana fort was used to keep prisoners.
              </Typography>
              <Typography>
                The Raigad Fort was built by "Chandrarao More" of Jawali and the
                chief architect/engineer was "Hiroji Indulkar".
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FortCard);
