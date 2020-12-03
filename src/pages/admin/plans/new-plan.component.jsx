import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {CreatePlan} from '../../../redux/actions/plansActions';

export const NewPlan = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");
    const history = useHistory();

const ht = null;
    const handleSave = () => {
        CreatePlan({
            name,
            price,
            promoPrice,
            dueDatePromo
        }, history)
    }

    return (
        <div className="new-plan-form-container">
            <div>{name}</div>
            <div className="new-plan-row">
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="new-plan-row">
                <label>Price</label>
                <input type="number" min="0.00" step="0.01" onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="new-plan-row">
                <label>Promotion Price</label>
                <input type="number" min="0.00" step="0.01" onChange={e => setPromoPrice(e.target.value)} />
            </div>
            <div className="new-plan-row">
                <label>Due date</label>
                <input type="date" onChange={e => setDueDate(e.target.value)}/>
            </div>
            <div className="new-plan-row">
                <button type="button" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

