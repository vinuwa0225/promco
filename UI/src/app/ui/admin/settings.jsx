import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import axios from 'axios'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

const breadCrumb = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '/',
    path: '#',
    isSeparator: false,
    isActive: false,
  },
]

function Settings() {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: 0,
    smtpServer: '',
    smtpAuth: false,
    smtpUser: '',
    smtpPassword: '',
    smtpPort: '25',
    smtpUseSSL: false,
    fromAddress: '',
    replyto: '',
    inseeROGroupEmail: '',
    observationPassValidDayCount: '7',
  })
  const validationRules = Yup.object().shape({
    smtpServer: Yup.string().required('Required'),
    smtpPort: Yup.number().required('Required'),
    observationPassValidDayCount: Yup.number().required('Required'),
  })

  useEffect(() => {
    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        if (response?.data?.status === 'S') {
          setState(response?.data?.result)
          setInitialLoading(false)
        }
      })
      .catch(function (error) {
        handleErros(error)
      })
  }, [])

  if (InitialLoading) return <Loading />

  function handleErros(error) {
    if (error?.response?.status === 401) {
      dispatch({
        type: 'SET_TOKEN',
        token: null,
      })
      return
    }

    setSubmitting(false)
    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }
    const message = Object.entries(error?.response?.data?.errors)
      .map(([key, value]) => value)
      .join(',')
    setError({status: 'E', text: message})
  }

  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validationRules}
        onSubmit={(values, {}) => {
          console.log(JSON.stringify(values))

          setSubmitting(true)
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  // values.code = response?.data?.result
                }
              })
              .catch(function (error) {
                handleErros(error)
              })
          }, 200)
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <PageTitle breadcrumbs={breadCrumb}>Settings</PageTitle>
            <div className='row gy-5 g-xl-12'>
              <div className='card mb-5 mb-xl-10'>
                <div
                  className='card-header border-0 cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_account_profile_details'
                  aria-expanded='true'
                  aria-controls='kt_account_profile_details'
                >
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Settings </h3>
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          SMTP Server IP
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='SMTP Server'
                                name='smtpServer'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.smtpServer}
                              />
                            </div>
                          </div>

                          {errors.smtpServer && touched.smtpServer ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.smtpServer}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          smtp Port
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='SMTP Port'
                                name='smtpServer'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.smtpPort}
                              />
                            </div>
                          </div>

                          {errors.smtpPort && touched.smtpPort ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.smtpPort}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>
                          smtp Username
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='SMTP Username'
                                name='smtpUser'
                                autoComplete='off'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.smtpUser}
                              />
                            </div>
                          </div>

                          {errors.smtpUser && touched.smtpUser ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.smtpUser}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>
                          SMTP Password
                        </label>
                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='Password'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='SMTP Port'
                                name='smtpUser'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.smtpPassword}
                                autoComplete='new-password'
                              />
                            </div>
                          </div>

                          {errors.smtpPassword && touched.smtpPassword ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.smtpPassword}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  fw-bold fs-6'>smtp UseSSL</label>

                        <div className='col-lg-8 d-flex align-items-center'>
                          <div className='form-check form-check-solid form-switch fv-row'>
                            <input
                              className='form-check-input w-45px h-30px'
                              type='checkbox'
                              name='smtpUseSSL'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={values.smtpUseSSL}
                            />
                            <label className='form-check-label'></label>
                          </div>
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  fw-bold fs-6'>smtp Auth</label>

                        <div className='col-lg-8 d-flex align-items-center'>
                          <div className='form-check form-check-solid form-switch fv-row'>
                            <input
                              className='form-check-input w-45px h-30px'
                              type='checkbox'
                              name='smtpAuth'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={values.smtpAuth}
                            />
                            <label className='form-check-label'></label>
                          </div>
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          From Address
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='From Address'
                                name='fromAddress'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fromAddress}
                              />
                            </div>
                          </div>

                          {errors.fromAddress && touched.fromAddress ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.fromAddress}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Reply To
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Reply To'
                                name='replyto'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.replyto}
                              />
                            </div>
                          </div>

                          {errors.replyto && touched.replyto ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.replyto}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Midas Email
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='email'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Insee RO Goup Email'
                                name='inseeROGroupEmail'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.inseeROGroupEmail}
                              />
                            </div>
                          </div>

                          {errors.inseeROGroupEmail && touched.inseeROGroupEmail ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.inseeROGroupEmail}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Observation Pass Valid Day Count
                        </label>

                        <div className='col-lg-5'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Days'
                                name='observationPassValidDayCount'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.observationPassValidDayCount}
                              />
                            </div>
                            <div className='col-lg-2 col-form-label fw-bold fs-6'>Days</div>
                          </div>

                          {errors.observationPassValidDayCount &&
                          touched.observationPassValidDayCount ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.observationPassValidDayCount}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className='card-footer d-flex justify-content-end py-6 px-9'>
                      <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                        <span className='indicator-progress' style={{display: 'block'}}>
                          {!isSubmitting && (
                            <span className='indicator-label'>
                              Save &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                            </span>
                          )}
                          {isSubmitting && (
                            <span className='indicator-progress' style={{display: 'block'}}>
                              <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                            </span>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Settings
