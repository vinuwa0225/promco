import React, {useState, useEffect, useRef} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce} from 'react-table'
import axios from 'axios'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'
import {
  
  TablesWidget7,



} from '../../../_metronic/partials/widgets'
const profileBreadCrumbs = [
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
]

let data = []
function GlobalFilter({preGlobalFilteredRows, globalFilter, setGlobalFilter}) {
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
            accessor: 'code',
          },
          {
            accessor: 'formatCode',
          },
          {
            accessor: 'company',
          },
          {
            accessor: 'session',
          },
          {
            accessor: 'trainDate',
          },
          {
            accessor: 'typeofTrainer',
          },
          {
            accessor: 'status',
          }
        ],
      },
    ],
    []
  )

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
    state: {pageIndex, pageSize, globalFilter},
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 0, pageSize: 20, globalFilter: ''},
    },
    useGlobalFilter,
    usePagination
  )
  const [error, setError] = useState({status: 'E', text: ''})
  const [InitialLoading, setInitialLoading] = useState(false)
  const [{token, user}, dispatch] = useDataLayerValue()

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
    setError({status: 'E', text: message})
  }

  /// Loading
  useEffect(() => {
  
    console.log('loading');

    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_MIDAS_BACKEND_API + '/api/trainings/'+props.type,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        setInitialLoading(false)
        if (response?.data?.status === 'S') {
          console.log(response?.data?.result)
          data = response?.data?.result
          setGlobalFilter('')
        }
      })
      .catch(function (error) {
        handleErros(error)
      })
    
  }, [])

  if (InitialLoading) return <Loading />

  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>{props.type==="NEW" && 'OnGoing Training Session(s)' }{props.type !=="NEW" && 'Completed Training Session(s)' } </span>
          <span className='text-muted mt-1 fw-bold fs-7'> {data.length} Ongoing</span>
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
          {props.type==="NEW" && <a
            href='/training/new'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Training
          </a>}
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
            <td className='text-gray-600 text-gray-800 fw-bolder'>Code</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Company</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Session</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Train Date</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Type of Trainer</td>
            <td className='text-gray-600 text-gray-800 fw-bolder'>Status</td>
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
                  <td>{row.values.formatCode}</td>
                  <td>{row.values.company}</td>
                  <td>{row.values.session}</td>
                  <td>{row.values.trainDate}</td>
                  <td>{row.values.typeofTrainer}</td>
                  <td>{row.values.status}</td>
                  
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <a
                        href={'edit/' + row.values.code}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </a>
                    </div>
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
                style={{width: '100px', height: '20px'}}
              />
            </a>
          </li>{' '}
          <select
            className='page-link'
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
            style={{width: '120px', height: '38px'}}
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

function DataGrid(props) {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-12'>
        <TablesWidget10 type={props.type} />
      </div>
      {/* end::Row */}
    </>
  )
}

function TrainingAllWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>All Trainings</PageTitle>
      <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>My Training Sessions</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_7_tab_1'
              >
                OnGoing
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_7_tab_2'
              >
                Completed
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <hr />
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_7_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
                <DataGrid type='NEW' />
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_7_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
                 <DataGrid type='COMPLETED'/>
            </div>
            {/* end::Table */}
          </div>
          
        </div>
      </div>
      {/* end::Body */}
    </div>
    
    </>
  )
}

export default TrainingAllWrapper
