import React from 'react';
import {Link} from 'react-router-dom'
export const AdminMenu = () => {

    return (
        <div className="menu-item">
            <Link to="/admin/plans">
                Plans
            </Link>
        </div>
    )
}