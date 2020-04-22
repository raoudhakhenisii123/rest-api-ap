import axios from 'axios'
import {GET_CONTACT} from './types'



export const getContact = () => dispatch => {
    axios.get('/allcontacts')
        .then(res => dispatch({
            type: GET_CONTACT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
export const addContact =newContact => dispatch => {
    axios.post('/new_contact', newContact)
        .then(() => dispatch( getContact()))
        .catch((err) => console.log(err))
}
export const deleteContact =id => dispatch => {
    axios.delete(`/deletedcontact/${id}`)
        .then(() => dispatch( getContact()))
        .catch((err) => console.log(err))
}

export const editContact=updatedcontact =>dispatch=>{
    axios.put(`/editcontact/${updatedcontact.id}`,updatedcontact)
    .then(()=>dispatch(getContact()))
    .catch((err)=>console.log(err))
}