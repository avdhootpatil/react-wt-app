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
    // background: '#EFEFEF',
    background: '#FFF',
    boxShadow:'10px 10px green'
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
    // backgroundColor:'#9099A2',
    backgroundColor:'green'
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
                {this.props.fort.name.charAt(0)}
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
             image={this.props.fort.images}
          />
          <CardContent>
            <Typography component="p">
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
                {this.props.fort.para_one}
              </Typography>
              <Typography paragraph>
              {this.props.fort.para_two}
              </Typography>
              <Typography paragraph>
              {this.props.fort.para_three}
              </Typography>
              <Typography>
              {this.props.fort.para_four}
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
