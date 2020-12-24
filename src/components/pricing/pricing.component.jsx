import { Button, CardContent, Card, CardHeader, makeStyles, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardHeaderRecommended: {
        backgroundColor:
        theme.palette.primary.main,
        color: "white",
      },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  }));

export const Pricing = (props) => {
    const classes = useStyles();

    return <Card>
    <CardHeader
      title={props.plan.title}
      subheader={props.plan.subheader}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center', color: 'white' }}
      action={props.plan.recommended  ? <StarIcon /> : null}
      className={props.plan.recommended ? classes.cardHeaderRecommended : classes.cardHeader}
    />
    <CardContent>
      <div className={classes.cardPricing}>
        <Typography component="h2" variant="h3" color="textPrimary">
          ${props.plan.price}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          /mo
        </Typography>
      </div>
      <ul>
        {props.plan.description.map((line) => (
          <Typography component="li" variant="subtitle1" align="center" key={line}>
            {line}
          </Typography>
        ))}
      </ul>
    </CardContent>
    <CardActions>
      <Button fullWidth variant={props.plan.recommended ? 'contained' : 'outlined'} color="primary">
        Select
      </Button>
    </CardActions>
  </Card>
}
 