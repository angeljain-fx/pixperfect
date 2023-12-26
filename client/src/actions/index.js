import axios from 'axios';
import { FETCH_USER, FETCH_PROJECTS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitMailProject = (values, history) => async dispatch => {
    let formData = new FormData();
    formData.append('serviceSelect', values.serviceSelect)
    formData.append('projectOwner', values.projectOwner)
    formData.append('projectTitle', values.projectTitle)
    formData.append('descriptionBox', values.descriptionBox)
    formData.append('teamSelector', values.teamSelector)
    formData.append('deliverySpeed', values.deliverySpeed)
    formData.append('deadline', values.deadline)
    formData.append('timedl', values.timedl)
    formData.append('timezone', values.timezone)
    formData.append('image', values.image)
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

  const res = await axios.post('/api/sendemail', formData, values);

  history.push('/projects');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = () => async dispatch => {
  const res = await axios.get('/api/sendemail');

  dispatch({ type: FETCH_PROJECTS, payload: res.data });
};
