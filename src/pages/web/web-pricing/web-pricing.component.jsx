import React, { useEffect, useState } from 'react';
import './web-pricing.styles.scss';
import {Container, Typography, Grid} from '@material-ui/core';
import {Pricing} from '../../../components/pricing/pricing.component';
import { db } from '../../../firebase/firebase.utils';
 
export const WebPricing = (props) => {
  const [plans, setPlans] = useState([])
  
  useEffect( () => {
    db.collection('plans').orderBy("price").get()
    .then(result => {
        let dbplans= [];
        result.docs.map(plan => dbplans.push(plan.data()))
        setPlans(dbplans)
    })
    .catch(error => {
      console.log('Error getting plans', error);
    })
//    setPlans(getPlans())
  },[])

    return (
     <div id="pricing" className="web-pricing-container">
      {/* Hero unit */}
      <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Get a free address or select a plan
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          You don't need a credit card to have a free account.
        </Typography>
      </Container>
      {/* End hero unit */}
      {console.log('loading', plans)}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {plans ? plans.map((plan, index) => {
            console.log('plan', plan);
            return(
            // Enterprise card is full width at sm breakpoint
            <Grid item key={index} xs={12} sm={6} md={3}>
                <Pricing plan={plan}/>
              </Grid>)
          }) : ""
        
        }
        </Grid>
      </Container>
      </div>
)
}
 