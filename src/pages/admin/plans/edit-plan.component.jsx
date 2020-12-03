import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {db} from '../../../firebase/firebase.utils';

export const EditPlan = () => {
    
    const idPlan = useSelector(state => {
        console.log(state);
        return state.common.editId})
    const [id, setId] = useState(idPlan);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");

    //Get plan data from firestore
    useEffect(() => {
        console.log('idplan useffect',id);
        db.collection("plans").doc(id).get()
        .then(document => {
            setName(document.data().name);
            setPrice(document.data().price);
            setPromoPrice(document.data().promoPrice);
            setDueDate(document.data().dueDatePromo);
        })
        .catch(error => console.log('error use effect'))
    },[])

    const handleSave = () => {
        console.log('entra aca');
        db.collection("plans").doc(id).update({
            name,
            price,
            promoPrice,
            dueDatePromo
        })
        .then(() => {
            console.log('document updated');
        })
        .catch(error => {
            console.log('error', error);
        })
    }

    return(
        <div className="new-plan-form-container">
        <div>{name}</div>
        <div className="new-plan-row">
            <label>Name</label>
            <input type="text" onChange={e => setName(e.target.value)} value={name}/>
        </div>
        <div className="new-plan-row">
            <label>Price</label>
            <input type="number" min="0.00" step="0.01" onChange={e => setPrice(e.target.value)} value={price}/>
        </div>
        <div className="new-plan-row">
            <label>Promotion Price</label>
            <input type="number" min="0.00" step="0.01" onChange={e => setPromoPrice(e.target.value)} value={promoPrice}/>
        </div>
        <div className="new-plan-row">
            <label>Due date</label>
            <input type="date" onChange={e => setDueDate(e.target.value)} value={dueDatePromo}/>
        </div>
        <div className="new-plan-row">
            <button type="button" onClick={()=>handleSave()}>Save</button>
        </div>
    </div>
    )
}

