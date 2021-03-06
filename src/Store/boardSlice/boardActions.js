import store from '../rootStore'
import { boardActions } from './boardReducer'

import { move } from '../../api/crud'

import { toast } from 'react-toastify'

export const moveCells = data => {
  return async dispatch => {
    const token = store.getState().auth.user.token
    try {
      dispatch(boardActions.move({ ...data }))
      const response = await move({ token, ...data })
      if (response) {
        toast.success('Saved', {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
      } else {
        throw new Error('Could not save on cloud!')
      }
    } catch (err) {
      toast.error(err, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      })
    }
  }
}
