/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {login} from '../redux/AuthCRUD'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Redirect, Switch, Route} from 'react-router-dom'
import {useDataLayerValue} from '../../../../DataLayer'
import axios from 'axios'
import {axioDefaultConfig} from '../../../../app/ui/common/commonResource'
import {stat} from 'fs'

export function Login() {
  const search = window.location.search
  const params = new URLSearchParams(search)
  const uuid = params.get('UUID') ?? '0088680A-DBFC-44ED-9C24-6B63A8B6B1AD'
  const [{token}, dispatch] = useDataLayerValue()
  const [tempToken, setTempToken] = useState('')
  const [state, setState] = useState({
    errorMessage: '',
    isCompleted: false,
  })
  const values = {
    email: '',
    password: '',
    _token: '',
  }

  if (uuid === undefined || uuid === '') {
    console.log('redirecting' + uuid)
    window.location.href = 'https://esb.midassit.com/?sys=tas'
  }

  console.log(token)
  if (!state.isCompleted) {
    setTimeout(() => {
      console.log(process.env.REACT_APP_MIDAS_BACKEND_API + '/api/accounts/token?UUID=' + uuid)
      axios({
        ...axioDefaultConfig,
        method: 'post',
        url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/accounts/token?UUID=' + uuid,
      })
        .then(function (response) {
          if (response?.data?.token !== '' && response?.data?.token !== null) {
            values._token = response?.data?.token
            setTempToken(response?.data?.token)
            console.log(values._token)

            dispatch({
              type: 'SET_USER',
              user: response?.data?.loggedUser,
            })
            console.log(response?.data?.loggedUser)
            dispatch({
              type: 'SET_TOKEN',
              token: values._token,
            })
            console.log('redirect to main site')
            window.location.href = '/dashboard'

            // dispatch(auth.actions.login(response?.data?.token))
            // dispatch(auth.actions.setUser(response?.data))
          } else {
            setState({
              ...state,
              errorMessage: 'Unable to continue, you do not have permissions to access',
              isCompleted: true,
            })
            console.log(response.data.message)
          }
        })
        .catch(function (error) {
          setState({
            ...state,
            errorMessage: 'Unable to continue, you do not have permissions to access',
            isCompleted: true,
          })
          console.log('The login detail is incorrect')
        })
    }, 1000)
  }

  return (
    <div>
      <span className='indicator-progress' style={{display: 'block'}}>
        {!state.isCompleted && (
          <>
            {' '}
            Please wait...
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
          </>
        )}
        {state.isCompleted && <> {state.errorMessage}</>}
      </span>
    </div>
  )
}
