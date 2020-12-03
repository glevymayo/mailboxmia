import React from 'react';
//import { createBrowserHistory } from 'history';
import { useHistory, withRouter } from 'react-router-dom';

//export default withRouter(createBrowserHistory())
export const EnviarA = (path) =>{
    let histo = useHistory();
    histo.push(path)
}

//export default History