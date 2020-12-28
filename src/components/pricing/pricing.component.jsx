import React from 'react';
import { Button, CardContent, Card, CardHeader, makeStyles, Typography, CardActions } from '@material-ui/core';
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
      color: "#ffffff",
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  subColor: {
    color: '#ffffff',
    align: 'center'
  }
}));

export const Pricing = ({plan}) => {
console.log('entro al plan con termino', plan.terms)
  const classes = useStyles();

  return(
    <Card>
      <CardHeader
        title={plan.name}
        titleTypographyProps={{ align: 'center' }}
        subheader={<div className={classes.subColor}><Typography >{plan.recommended ? 'Most popular': ''}</Typography></div>}
        subheaderTypographyProps={{ align: 'center'}}
        action={plan.recommended ? <StarIcon /> : null}
        className={plan.recommended ? classes.cardHeaderRecommended : classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h2" variant="h3" color="textPrimary">
            ${plan.price}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
        </Typography>
        </div>
        <ul>
          {plan.terms ? plan.terms.map((line, index) => (
            <Typography component="li" variant="subtitle1" align="center" key={index}>
              {line}
            </Typography>
          )) : ""}
         
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={plan.recommended ? 'contained' : 'outlined'} color="primary">
          Select
      </Button>
      </CardActions>
    </Card>
  )
}


