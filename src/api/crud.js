import apiUrl from './apiConfig'
import axios from 'axios'

//  CREATE COLUMN
export const createColumn = data => {
  return axios({
    method: 'POST',
    url: apiUrl + '/column/',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data: {
      elementId: data.elementId,
      form: data.form
    }
  })
}

//  CREATE CELL
export const createCell = data => {
  return axios({
    url: apiUrl + '/cell/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data: {
      elementId: data.elementId,
      form: data.form
    }
  })
}

// READ BOARD
export const getBoard = token => {
  return axios({
    method: 'GET',
    url: apiUrl + '/board/',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// UPDATE REORDER/MOVE CELLS
export const move = data => {
  return axios({
    url: apiUrl + '/column/',
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data: { source: data.source, destination: data.destination }
  })
}

//  UPDATE COLUMN
export const editColumn = data => {
  return axios({
    url: apiUrl + '/column/' + data.elementId,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data: {
      elementId: data.elementId,
      form: data.form
    }
  })
}

// UPDATE CELL
export const editCell = data => {
  return axios({
    url: apiUrl + '/cell/' + data.elementId,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data: {
      elementId: data.elementId,
      form: data.form
    }
  })
}

// DELETE COLUMN
export const deleteColumn = data => {
  return axios({
    url: apiUrl + '/column/' + data.elementId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}

// DELETE CELL
export const deleteCell = data => {
  return axios({
    url: apiUrl + '/cell/' + data.elementId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}
