import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import React, { useEffect, useState, useNavigate } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import ImageComponent from '../common/ImageComponent'
import { Redirect, useHistory } from 'react-router-dom'
import { useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce } from 'react-table'

import {
  axioDefaultConfig,
  options,
  phoneRegex,
  nicRegex,
  nic_newRegex,
} from '../common/commonResource'
import { toast } from 'react-toastify'
import { useDataLayerValue } from '../../../DataLayer'
import { date } from 'yup/lib/locale'
import { setDate } from 'date-fns'

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
    title: 'All Trainings',
    path: '/training/all',
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


function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  //const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)

  const onChange = (value) => {
    setGlobalFilter(value)
  }

  return (
    <div className='w-100 position-relative' autoComplete='off'>
      <KTSVG
        path='/media/icons/duotune/general/gen021.svg'
        className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
      />

      <input
        type='text'
        className='form-control form-control-solid px-15'
        name='search'
        placeholder='Search'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

function TablesWidget10(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            accessor: 'sapNumber',
          },
          {
            accessor: 'employeeName',
          },
          {
            accessor: 'department',
          },

        ],
      },
    ],
    []
  )
  const [error, setError] = useState({ status: 'E', text: '' })
  const [InitialLoading, setInitialLoading] = useState(false)
  const [{ token, user }, dispatch] = useDataLayerValue()
  const [data, setData] = useState([])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20, globalFilter: '' },
    },
    useGlobalFilter,
    usePagination
  )

  function handleErros(error) {
    if (error?.response?.status === 401) {
      dispatch({
        type: 'SET_TOKEN',
        token: null,
      })
      return
    }

    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }

    const message = Object.entries(error?.response?.data?.errors)
      .map(([key, value]) => value)
      .join(',')
    setError({ status: 'E', text: message })
  }

  /// Loading
  useEffect(() => {

    const getemployeeDetails = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/trainings/' + props.id + '/get-employee',
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })

    if (props.id > 0) {
      axios
        .all([getemployeeDetails])
        .then(
          axios.spread((...responses) => {
            const getemployeeResponse = responses[0]
            if (
              getemployeeResponse?.data?.status === 'S'
            ) {
              setData(getemployeeResponse?.data?.result)
              setGlobalFilter('')
              return
            }
          })
        )
        .catch(function (error) {
          handleErros(error)
          return
        })

      //setMedicalIsLoading(false)
      //setTrainingIsLoading(false)
      return
    }
  }, [])

  // if (InitialLoading) return <Loading />

  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Trainee(s)</span>
          <span className='text-muted mt-1 fw-bold fs-7'> {data.length} Registered</span>
        </h3>
        <ErrorMessage error={error} />
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <div className='me-4'>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={''}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
          {props.status === "NEW" && 
          <button
            className='btn btn-sm btn-light-primary'
            onClick={(s) => props.MarkAttendance()}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            Mark Attendance(s)
          </button>
        }

        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <table
          className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
          {...getTableProps()}
        >
          <thead>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Employee#</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Name</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Department</td>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length === 0 && (
              <tr>
                <td colSpan={7}>
                  <b>No Data Found!</b>
                </td>
              </tr>
            )}
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {/* {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}*/}
                  <td>{row.values.sapNumber}</td>
                  <td>{row.values.employeeName}</td>
                  <td>{row.values.department}</td>
                  <td>
                  {props.status === "NEW" && <div className='d-flex justify-content-end flex-shrink-0'>
                      <button
                        onClick={(e) => props.deleteEmployeeOnClick(e, row.values)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen027.svg'
                          className='svg-icon-3'
                        />
                      </button>
                    </div>
            }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
      Pagination can be built however you'd like. 
      This is just a very basic UI implementation:
    */}
        <ul className='pagination'>
          <li className='page-item' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <a className='page-link'>First</a>
          </li>
          <li className='page-item' onClick={() => previousPage()} disabled={!canPreviousPage}>
            <a className='page-link'>{'<'}</a>
          </li>
          <li className='page-item' onClick={() => nextPage()} disabled={!canNextPage}>
            <a className='page-link'>{'>'}</a>
          </li>
          <li className='page-item' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <a className='page-link'>Last</a>
          </li>
          <li>
            <a className='page-link'>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </a>
          </li>
          <li>
            <a className='page-link'>
              <input
                className='page-link'
                type='number'
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px', height: '20px' }}
              />
            </a>
          </li>{' '}
          <select
            className='page-link'
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
            style={{ width: '120px', height: '38px' }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </ul>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

function NewTrainingWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [IsEmployeeLoading, setisEmployeeLoading] = useState(true)
  const [error, setError] = useState({ status: 'E', text: '' })
  const [errorOnEmpStatus, setErrorOnEmpStatus] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [{ token }, dispatch] = useDataLayerValue()
  const [preview, setPreview] = useState(false)
  const [employeeList, setEmployeeList] = useState([])
  const [rfid, setRfid] = useState('')
  const history = useHistory()

  const [state, setState] = useState({
    code: props.match?.params?.id ?? 0,
    trainerName: '',
    trainDate: '',
    timeTo: '',
    timeFrom: '',
    trainerEMP: '',
    typeofTrainer: '',
    company: '',
    session: '',
    remark: '',
    isReadyToSubmit : false,
    status : 'NEW',
    formatCode : ''
  })

  
  const [sessionList, setSessionList] = useState([])
  const [locationList, setLocationList] = useState([])

  const [employee, setEmployee] = useState({
    sapNumber: '',
    employeeName: '',
    department: '',
  })

  const validationRules = Yup.object().shape({
    trainerName: Yup.string()
      .required('Trainer name is required'),
      company: Yup.string()
      .required('Company  is required'),

      session: Yup.string()
      .required('Session  is required'),
      
      typeofTrainer: Yup.string()
      .required('Type of Trainer is required'),

      timeTo: Yup.string()
      .required('Time to  is required'),

      timeFrom: Yup.string()
      .required('Time from is required'),

      trainDate: Yup.date()
      .max(new Date(), 'Can not be future date'),

      remark: Yup.string()
      .required('Name of the Training is required').max(30,"Too long, maximum length is 30")
    /*timeTo: Yup.string()
      .min(2, 'Too short!')
      .max(500, 'Too long!')
      .required('Last name is required'),
    timeFrom: Yup.string()
      .min(2, 'Too short!')
      .max(50, 'Too long!')
      .required('Driving license is required'),
    trainDate: Yup.date()
      .min(new Date(), 'should be a future date')
      .required('Driving license is required'),
    trainerEMP: Yup.string().matches(phoneRegex, 'Invalid phone').required('Contact no is required'),
    remark: Yup.string()
      .min(2, 'Too short!')
      .max(1000, 'Too long!')
      .required('remark is required'),
    fK_Operation: Yup.string().required('Operation is required'),
    fK_TransportCode: Yup.string().required('Transpoter is required'),
    driverType: Yup.string().required('Drver type is required'),
    joiningDate: Yup.date()
      .max(new Date(), 'Please select today or below date')
      .required('Joining date is required'),
    nic: Yup.string().matches(nicRegex, 'Invalid NIC number'),*/
  })



  useEffect(() => {
    const id = props.match?.params?.id ?? 0
    console.log(id)

    const getTraingDetails = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/training/get-trainings/' + id,
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })

    const getemployeeDetails = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/trainings/' + id + '/get-employee',
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })

    const getsession =  axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/master/sessions',
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })

    const getlocation =  axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/master/location',
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })

    if (id > 0) {
      axios
        .all([getTraingDetails, getemployeeDetails,getsession, getlocation ])
        .then(
          axios.spread((...responses) => {
            const getSitesResponse = responses[0]
            const getemployeeResponse = responses[1]
            if (
              getSitesResponse?.data?.status === 'S' &&
              getemployeeResponse?.data?.status === 'S'
            ) {
              console.log(JSON.stringify(getSitesResponse?.data?.result))
              setState(getSitesResponse?.data?.result)
              setEmployeeList(getemployeeResponse?.data?.result)

                      
              setSessionList(responses[2]?.data?.result);
              setLocationList(responses[3]?.data?.result);

              setisEmployeeLoading(false)
              setInitialLoading(false)
              return
            }
          })
        )
        .catch(function (error) {
          handleErros(error)
          return
        })
      return
    }else{

      axios
        .all([getsession, getlocation ])
        .then(
          axios.spread((...responses) => {
            if (
              responses[0]?.data?.status === 'S' &&
              responses[1]?.data?.status === 'S'
            ) {
              setSessionList(responses[0]?.data?.result);
              setLocationList(responses[1]?.data?.result);

              setisEmployeeLoading(false)
              setInitialLoading(false)
              return
            }
          })
        )
        .catch(function (error) {
          handleErros(error)
          return
        })
    }
  }, [])

  function deleteEmployeeOnClick(e, pram) {
    setisEmployeeLoading(true)
    axios({
      method: 'post',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/trainings/' + state.code + '/remove-employee/' + pram.sapNumber,
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })
      .then(function (response) {
        setisEmployeeLoading(false)
        if (response?.data?.status === 'S') {
          RefreshEmployee()
          toast.success(response?.data?.text, options)
          return
        }
        toast.error(response?.data?.text, options)
      })
      .catch(function (error) {
        handleErros(error)
      })
    e.preventDefault()
  }

  function RefreshEmployee() {
    axios({
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/trainings/' + state.code + '/get-employee',
      headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
    })
      .then(function (response) {
        setEmployeeList(response?.data?.result)
        setisEmployeeLoading(false)
      })
      .catch(function (error) {
        handleErros(error)
      })
  }

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
    setError({ status: 'E', text: message })
  }

  function onValidateBlockedDate(values) {
    const errors = {}
    /* switch (blockingType) {
       case '2':
         if (values.blockedDateTime === undefined || values.blockedDateTime === null) {
           errors.blockedDateTime = 'Please select the date'
         } else if (new Date(values.blockedDateTime) <= new Date()) {
           errors.blockedDateTime = 'Please select future date'
         }
         break
     }*/
    return errors
  }

  function MarkAttendance() {
    setEmployee({
      sapNumber: '',
      employeeName: '',
      department: '',
    })
    setPreview(!preview)
  }


  function onSAPEmpnumberKeyup(pram) {
    if (pram.key === 'Enter') {
      setInitialLoading(true)
      setErrorOnEmpStatus('');
      axios({
        method: 'get',
        url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/' + state.code + '/add-employee/' + pram.target.value,
        headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
      })
        .then(function (response) {
          setRfid('');
          setSubmitting(false)
          if (response?.data?.status === 'S') {
            RefreshEmployee()
            setEmployee(response?.data?.result);
            setInitialLoading(false)
            toast.success(response?.data?.text, options)
            return
          }
          else {
            setErrorOnEmpStatus(response?.data?.text);
            setEmployee(response?.data?.result);
            setInitialLoading(false)
            return
          }
          toast.error(response?.data?.text, options)
        })
        .catch(function (error) {
          handleErros(error)
        })
    }
    console.log(pram.target.value);
    pram.preventDefault()
  }

  if (preview) {
    if (InitialLoading) return <Loading />
    return (
      <>
        <div> 
          <PageTitle breadcrumbs={breadCrumb}>Mark Attendance</PageTitle>
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
                <h3 className='fw-bolder m-0'>Mark Attendance</h3>
              </div>
              <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        >
          <div
            className='btn btn-sm btn-success'
          >
         {employeeList.length} On-Board
          </div>      </div>
            </div>
            <div id='kt_account_profile_details' className='collapse show'>
              <div className='card-body border-top p-9'>
                <ErrorMessage error={error} />
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label  fw-bold fs-6'>
                  </label>
                  <div className='col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-6 fv-row'>
                        <input
                          type='text'
                          autoFocus
                          className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                          placeholder='Enter SAP Employee No'
                          name='rfid'
                          onChange={(e) => setRfid(e.target.value)}
                          onBlur={(e) => setRfid(e.target.value)}
                          onKeyPress={e => { e.which === 13 && e.preventDefault() }}
                          value={rfid}
                          onKeyUp={(s) => onSAPEmpnumberKeyup(s)}
                        />
                        {errorOnEmpStatus ? (
                          <div className='text-danger fs-7 fw-bolder'>{errorOnEmpStatus}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <br /><br /><br />

                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label fw-bold fs-6'></label>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-2 fv-row'>
                        {(employee?.sapNumber && <>
                          <div
                            className='image-input image-input-outline'
                            data-kt-image-input='true'
                          >
                            <div
                              className='image-input-wrapper w-125px h-125px'
                              style={{
                                backgroundImage: `url(${toAbsoluteUrl('https://eas.midassit.com/images/EMP_IMAGE/' + employee?.sapNumber + '.jpg')})`,
                              }}
                            ></div>
                          </div>
                        </>)}
                        {(!employee.sapNumber && <>
                          <div
                            className='image-input image-input-outline'
                            data-kt-image-input='true'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`,
                            }}
                          >
                            <div
                              className='image-input-wrapper w-125px h-125px'
                              style={{
                                backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`,
                              }}
                            ></div>
                          </div>
                        </>)}
                      </div>
                      <div className='col-lg-5 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='Employee Name'
                          name='sapNumber'
                          value={employee?.sapNumber}
                        />
                        <br />
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='SAP No'
                          name='employeeName'
                          value={employee?.employeeName}
                        />
                        <br />
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='Department'
                          name='department'
                          value={employee?.department}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer d-flex justify-content-end py-6 px-9'>
                <button onClick={(s) => MarkAttendance()} className='btn btn-dark' >
                  <span className='indicator-progress' style={{ display: 'block' }}>
                    <span className='indicator-label'>
                      Close &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <br /> <br /> <br />
        </div>
      </>
    )
  }

  if (InitialLoading) return <Loading />
  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validationRules}
        validate={onValidateBlockedDate}
        onSubmit={(values, { }) => {
          setSubmitting(true)
          setTimeout(() => {
            
            const data = {
              code: state.code,
              trainerName: values.trainerName,
              trainDate: values.trainDate,
              timeTo: values.timeTo,
              timeFrom: values.timeFrom,
              trainerEMP: values.trainerEMP,
              typeofTrainer: values.typeofTrainer,
              company: values.company,
              session: values.session,
              remark: values.remark,
              isReadyToSubmit : values.isReadyToSubmit
            }
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                //  ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/training/update-training',
                headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
                data: JSON.stringify(data),
              }
              axios(config)
                .then(function (response) {
                  setSubmitting(false)
                  setError(response?.data)
                  if (response?.data?.status === 'S') {
                      setState(response?.data?.result)
                    toast.success(response?.data?.text, options)
                    return
                  }
                  toast.error(response?.data?.text, options)
                })
                .catch(function (error) {
                  handleErros(error)
                })
            } else {
              config = {
                method: 'post',
                url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/training/new-training',
                data: JSON.stringify(data),
                headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + token },
              }
              axios(config)
                .then(function (response) {
                  setSubmitting(false)
                  setError(response?.data)
                  if (response?.data?.status === 'S') {
                    setState(response?.data?.result)
                    history.push("/training/edit/"+response?.data?.result.code);
                    toast.success(response?.data?.text, options)
                    return
                  }
                  toast.error(response?.data?.text, options)
                })
                .catch(function (error) {
                  handleErros(error)
                })
            }
          }, 200) /**/
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form  onSubmit={(e) => { e.preventDefault(); handleSubmit();}}  >
            {state.code === 0 && <PageTitle breadcrumbs={breadCrumb}>New Training</PageTitle>}
            {state.code > 0 && <PageTitle breadcrumbs={breadCrumb}>View Training</PageTitle>}
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
                  {state.code === 0 && <h3 className='fw-bolder m-0'>New Training</h3>}
                  {state.code > 0 && <h3 className='fw-bolder m-0'>View Training</h3>}
                </div>
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        >
          <div
            className='btn btn-sm btn-light-primary'
          >
           {state.formatCode}
          </div>
        </div>
              </div>
              <div id='kt_account_profile_details' className='collapse show'>
                <div className='card-body border-top p-9'>
                  <ErrorMessage error={error} />

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Name</label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Name'
                        name='remark'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.remark}
                      />
                      {errors.remark && touched.remark ? (
                        <div className='text-danger fs-7 fw-bolder'>{errors.remark}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                      Trainer Name
                    </label>

                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-6 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                            placeholder='Trainer Name'
                            name='trainerName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.trainerName}
                          />

                          {errors.trainerName && touched.trainerName ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.trainerName}</div>
                          ) : null}
                        </div>

                        <div className='col-lg-6 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Trainer EMP'
                            name='trainerEMP'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.trainerEMP}
                          />
                          {errors.trainerEMP && touched.trainerEMP ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.trainerEMP}</div>
                          ) : null}
                        </div>

                      </div>
                    </div>






                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 required col-form-label fw-bold fs-6'>
                      <span className=''>Train Date</span>
                    </label>

                    <div className='col-lg-4 fv-row'>
                      <input
                        type='date'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Train Date'
                        name='trainDate'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.trainDate}
                      />
                      {errors.trainDate && touched.trainDate ? (
                        <div className='text-danger fs-7 fw-bolder'>{errors.trainDate}</div>
                      ) : null}
                    </div>

                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                      Time
                    </label>

                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-6 fv-row'>
                          <input
                            type='time'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Time From'
                            name='timeFrom'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.timeFrom}
                          />
                          {errors.timeFrom && touched.timeFrom ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.timeFrom}</div>
                          ) : null}
                        </div>

                        <div className='col-lg-6 fv-row'>
                          <input
                            type='time'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Time To'
                            name='timeTo'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.timeTo}
                          />
                          {errors.timeTo && touched.timeTo ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.timeTo}</div>
                          ) : null}
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                      Type of Trainer
                    </label>

                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-6 fv-row'>
                          <select
                            className='form-select form-select-solid form-select-lg fw-bold'
                            name='typeofTrainer'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.typeofTrainer}
                          >
                            <option value=''>Select a Type Of Trainer </option>
                            <option value='external'>External</option>
                            <option value='internal'>Internal</option>
                          </select>
                          {errors.typeofTrainer && touched.typeofTrainer ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.typeofTrainer}</div>
                          ) : null}
                        </div>

                        <div className='col-lg-6 fv-row'>
                          <select
                            className='form-select form-select-solid form-select-lg fw-bold'
                            name='session'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.session}
                          >
                            <option value=''>Select a session</option>
                            {sessionList.map((d, key) => (
                                <option value={d.code}>{d.text}</option>
                              ))}
                          </select>
                          {errors.session && touched.session ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.session}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                      Location
                    </label>

                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-6 fv-row'>
                          <select
                            className='form-select form-select-solid form-select-lg fw-bold'
                            name='company'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.company}
                          >
                            <option value=''>Select a Location </option>
                            {locationList.map((d, key) => (
                                <option value={d.code}>{d.text}</option>
                              ))}
                          </select>
                          {errors.company && touched.company ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.company}</div>
                          ) : null}
                        </div>

                        <div className='col-lg-6 fv-row'>

                        </div>
                      </div>
                    </div>
                  </div>

                  


                </div>

              </div>
            </div>
            { (props.match?.params?.id ?? 0) > 0 && <>
            <br /> 
          {IsEmployeeLoading && <Loading />}
            {!IsEmployeeLoading && (
              <>
                <TablesWidget10 id={state.code} status={state.status} deleteEmployeeOnClick={deleteEmployeeOnClick} MarkAttendance={MarkAttendance} />
              </>
            )}
          <br />
          {state.status === "NEW"  && <>
            <div className='card mb-5 '>
              <div className='card-body '>
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label  fw-bold fs-6'>
                    All Above information ready to submit
                  </label>
                  <div className='col-lg-8 d-flex align-items-center'>
                    <div className='form-check form-check-solid form-switch fv-row'>
                      <input
                        className='form-check-input w-45px h-30px'
                        type='checkbox'
                        name='isReadyToSubmit'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.isReadyToSubmit}
                      />
                      <label className='form-check-label'></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>}
            </>}

{(state.status === "NEW"  && <>
<div className='card-footer d-flex justify-content-end py-6 px-9'>
                  <button type='submit' className='btn btn-primary' style={{marginLeft:'5px'}} disabled={isSubmitting}>
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      {!isSubmitting && (
                        <span className='indicator-label'>
                          { (props.match?.params?.id ?? 0) === 0 && 'Next' }

                          { (props.match?.params?.id ?? 0 ) > 0 && <>
                         {values.isReadyToSubmit && 'Save & Submit' }  {!values.isReadyToSubmit && 'Save' }  
                         </> } <i class='fas fa-chevron-right fs-1x'></i>
                        </span>
                      )}
                      {isSubmitting && (
                        <span className='indicator-progress' style={{ display: 'block' }}>
                          <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                        </span>
                      )}
                    </span>
                  </button>
                </div>
</> )}

        
                <br /> <br /> <br />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default NewTrainingWrapper
