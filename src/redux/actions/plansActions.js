import firebase from '../../firebase/firebase.utils';

export const CreatePlan = (plan, history) => {
    firebase.firestore().collection('plans').add(plan)
    .then( () => {
        history.push('/admin/plans')
    })
    .catch(error => {
        console.log('Error', error);
    })
    
}