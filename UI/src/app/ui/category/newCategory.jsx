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
import {date} from 'yup/lib/locale'

function NewCategoryWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()
  const [template, setTemplate] = useState()

  const [state, setState] = useState({
    code: 0,
    name: '',
    isActive: true,
    fieldCount: 0,
    fields: '',
    mark: 0,
  })

  const validationRules = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
    mark: Yup.number().max(100, 'Invalid value, value can be 0-100'),
  })

  useEffect(() => {
    const id = props.match?.params?.id ?? 0
    const templateID = props.match?.params?.templateid ?? 0

    const getTemplate = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/templates/' + templateID,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    if (id === 0) {
      axios
        .all([getTemplate])
        .then(
          axios.spread((...responses) => {
            const getTemplateResponse = responses[0]
            if (getTemplateResponse?.data?.status === 'S') {
              setTemplate(getTemplateResponse.data?.result)
              setInitialLoading(false)
            }
          })
        )
        .catch(function (error) {
          handleErros(error)
        })
      return
    }

    const getFormDetails = axios({
      ...axioDefaultConfig,
      method: 'get',
      url:
        process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
        '/api/templates/' +
        templateID +
        '/categories/' +
        id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    axios
      .all([getFormDetails, getTemplate])
      .then(
        axios.spread((...responses) => {
          const getFormDetailsResponse = responses[0]
          const getTemplateResponse = responses[1]
          if (
            getFormDetailsResponse?.data?.status === 'S' &&
            getTemplateResponse?.data?.status === 'S'
          ) {
            setState(getFormDetailsResponse?.data?.result)
            setTemplate(getTemplateResponse.data?.result)
            setInitialLoading(false)
          }
        })
      )
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

  const breadCrumb = [
    {
      title: 'Home',
      path: '/',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '/',
      path: '#',
      isSeparator: false,
      isActive: false,
    },
    {
      title: template.name,
      path: '/template/all',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '/',
      path: '#',
      isSeparator: false,
      isActive: false,
    },
    {
      title: 'All Categoires',
      path: '/template/' + template.code + '/category/all',
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
  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validationRules}
        onSubmit={(values, {}) => {
          setSubmitting(true)
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url:
                  process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                  '/api/templates/' +
                  template.code +
                  '/category',
                data: values,
                headers: {
                  ...axioDefaultConfig.headers,
                  Authorization: 'Bearer ' + token,
                },
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url:
                  process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                  '/api/templates/' +
                  template.code +
                  '/category',
                data: values,
                headers: {
                  ...axioDefaultConfig.headers,
                  Authorization: 'Bearer ' + token,
                },
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  values.code = parseInt(response?.data?.result)
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
            {state.code === 0 && <PageTitle breadcrumbs={breadCrumb}>New Category Type</PageTitle>}
            {state.code > 0 && <PageTitle breadcrumbs={breadCrumb}>Update Category Type</PageTitle>}
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
                    {state.code === 0 && <h3 className='fw-bolder m-0'>New Category Type</h3>}
                    {state.code > 0 && <h3 className='fw-bolder m-0'>Update Category Type</h3>}
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <ErrorMessage error={error} />
                    <div className='card-body border-top p-9'>
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Category Name
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              {errors.name && touched.name ? (
                                <div className='text-danger fs-7 fw-bolder'>{errors.name}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Mark (out of 100)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                name='mark'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mark}
                              />
                              {errors.mark && touched.mark ? (
                                <div className='text-danger fs-7 fw-bolder'>{errors.mark}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>

                      {values.fieldCount === 0 && (
                        <div className='row mb-6'>
                          <label className='col-lg-4 col-form-label  fw-bold fs-6'>Fields</label>

                          <div className='col-lg-8 fv-row'>
                            <textarea
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              placeholder='Mention categories using | sperator '
                              name='fields'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fields}
                            />
                            {errors.fields && touched.fields ? (
                              <div className='text-danger fs-7 fw-bolder'>{errors.fields}</div>
                            ) : null}
                            <span>Tire Condition | Head light condition</span>
                          </div>
                        </div>
                      )}
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Is Active
                        </label>

                        <div className='col-lg-8 d-flex align-items-center'>
                          <div className='form-check form-check-solid form-switch fv-row'>
                            <input
                              className='form-check-input w-45px h-30px'
                              type='checkbox'
                              name='isActive'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={values.isActive}
                            />
                            <label className='form-check-label'></label>
                          </div>
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

export default NewCategoryWrapper
