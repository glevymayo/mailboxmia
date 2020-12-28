import React from 'react'
import './testimonial.styles.scss';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    xlarge: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
   
  }));

export const Testimonial = props => {

    const classes = useStyles();
    return(
        <div id="testimonials" className="testimonial-container">
            <div className="testimonial-avatar">
                <Avatar alt={props.data.name} src={props.data.image} className={classes.xlarge}/>
            </div>
            <div className="testimonial-title">
                 {props.data.title}
            </div>
            <div className="testimonial-text">
               " {props.data.text} "
            </div>
            <div className="testimonial-name">
               {props.data.name}
            </div>
        </div>
    )
}