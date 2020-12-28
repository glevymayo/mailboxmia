import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './plans.styles.scss';
import { db } from '../../../firebase/firebase.utils';
import { DataGrid } from '@material-ui/data-grid';
import {Button, InputAdornment, IconButton, TextField, Dialog, DialogActions, DialogContent, Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import { Search } from '@material-ui/icons';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const usdPrice = {
    type: 'number',
    flex: 1,
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    cellClassName: 'font-tabular-nums',
};



export const ViewPlans = () => {
    const history = useHistory();
    const [plans, setPlans] = useState([])
    const [selection, setSelection] = useState([])
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [action, setAction] = useState("")
    const [actionMessage, setActionMessage] = useState(false)

    const columns = [
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'price', headerName: 'Price', ...usdPrice },
        { field: 'promoPrice', headerName: 'Promo Price', ...usdPrice },
        { field: 'dueDatePromo', headerName: 'Promo end date', flex: 1, type: 'dateTime' },
        { field: 'id', headerName: ' ', flex: 1, 
                renderCell: (params) => (
                <Link to={"./plans/edit/" + params.value} className="link">
                    <Button variant="outlined" size="small" color="primary">Edit</Button>
                </Link>)}
               
    ]
    useEffect(() => {
        const rows = [];
        db.collection('plans').orderBy('name').startAt(searchValue).endAt(searchValue + '~').get()
            .then(querySnapshot => {
                querySnapshot.docs.map(doc => {
                     return rows.push({
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price,
                        promoPrice: doc.data().promoPrice,
                        dueDatePromo: doc.data().dueDatePromo,
                    })
                })
                setPlans(rows)
            })
    }, [action, setAction])


    const handleDelete = () => {
        selection.map(sel => {
            db.collection("plans").doc(sel).delete().then(() => {
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
            setOpen(false);
            setAction(action+1);
            setSelection("");
            setActionMessage(true);
        })
    }
    return (
        <div className="plans-container">
            <div><h1>Plans</h1></div>
            <div className="plans-search-container">
                <div className="plan-search-actions">
                    <Button variant="contained"
                        color="primary"
                        onClick={() => history.push('./plans/new')}>
                        New
                    </Button>
                    {
                        selection.length > 0 ? <Button id="deleteButton" variant="contained" color="secondary" onClick={() => setOpen(true)}>Delete</Button> : ''
                    }
                </div>
                <div className="plan-search">
                    <TextField
                        size="small"
                        name="search"
                        type="text"
                        variant="outlined"
                        onChange={e => {setSearchValue(e.target.value); setAction(action+1)}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <IconButton
                                    aria-label="search"
                                    onClick={e => setAction(action+1)}
                                    onMouseDown={e => e.preventDefault()}
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }}
                        fullWidth />
                </div>
            </div>
            <div className="plans-table-container">
                <DataGrid rows={plans} columns={columns} checkboxSelection
                    autoHeight={true}
                    rowHeight={40}
                    loading={plans.length> 0 ? false : true}
                    pageSize={10}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    onSelectionChange={(newSelection) => {
                        setSelection(newSelection.rowIds);
                    }} />
            </div>

            <Dialog
                maxWidth="xs"
                aria-labelledby="confirmation-dialog-title"
                open={open}
            >
                <DialogContent dividers>
                    <h3>Selected plans will be deleted. Are you sure?</h3>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">Cancel </Button>
                    <Button onClick={handleDelete} color="primary">Ok</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={actionMessage} autoHideDuration={3000} onClose={() => setActionMessage(false)}>
                <Alert onClose={() => setActionMessage(false)} severity="success">
                    Plan was deleted successfully!
                </Alert>
            </Snackbar>

        </div>

    )
}