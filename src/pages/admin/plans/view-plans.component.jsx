import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './plans.styles.scss';
import {db} from '../../../firebase/firebase.utils';


export const ViewPlans = () => {
    const history = useHistory();
    const [plans, setPlans] = useState([])
    const [deletePlan, setDeletePlan] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('plans').get()
        .then(querySnapshot => {
            setPlans(querySnapshot.docs)
            console.log('plans',querySnapshot.docs);
        })
    },[deletePlan, setDeletePlan])

    const handleEdit = (id) => {
        console.log(id)
        dispatch({type: "SET_EDIT_ID", payload: id});
        history.push('./plans/edit')
    }

    const handleDelete = (id) => {
        db.collection("plans").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        setDeletePlan(1)
    }
    return (
        <div className="plans-container">
            <div><h1>Planes</h1></div>
            <div className="plans-search-container">
                <div className="plan-search">
                    <input type="text" name="" id=""/>
                </div>
                <div className="plan-search-actions">
                    <button type="button" onClick={() =>history.push('./plans/new') }>New Plan</button>
                </div>
            </div>
            <br/>
            <div className="plans-table-container">
                <div className="plans-table-header-container">
                    <div className="plan-table-title">Name</div>
                    <div className="plan-table-title">Cost</div>
                    <div className="plan-table-title"></div>
                    <div className="plan-table-title">Actions</div>
                </div>
                <div className="plans-table-rows-container">
                    {
                      plans.map((plan, index) => (

                      <div key={index} className="plans-table-row">
                          <div className="plan-row">{plan.data().name}</div>
                          <div className="plan-row">{plan.data().price}</div>
                          <div className="plan-row">{plan.data().promoPrice}</div>
                          <div className="plan-row">
                              <button type="button" onClick={() => handleEdit(plan.id)}>Edit</button>
                              <button type="button" onClick={() => handleDelete(plan.id)}>Delete</button>
                          </div>
                      </div>
                      ))
                    }
                </div>
            </div>
        </div>
)}