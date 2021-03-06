import axios from 'axios';
import setLoading from 'store/actions/Loading';
import store from 'store';

const axiosInstance = async (method, path, request) => {
  store.dispatch(setLoading(true));

  const config = {
    method,
    request,
    url: process.env.REACT_APP_API_HOST + path,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MDB_TOKEN}`
    }
  };

  return axios(config)
    .then(response => {
      store.dispatch(setLoading(false));
      return response.data;
    })
    .catch(error => {
      store.dispatch(setLoading(false));
      console.log(error.response);
      alert(error.response.data.status_message);
      return error.response;
    })
};

export const read = (url, request) => {
  return axiosInstance('get', url, request)
};

export const remove = (url, request) => {
  return axiosInstance('delete', url, request)
};

export const create = (url, request) => {
  return axiosInstance('post', url, request)
};

export const update = (url, request) => {
  return axiosInstance('put', url, request)
};
