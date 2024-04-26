import React, {useState, useEffect, useRef} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce} from 'react-table'
import axios from 'axios'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

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

function CategoryAllWrapper(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            accessor: 'code',
          },
          {
            accessor: 'name',
          },
          {
            accessor: 'isActive',
          },
          {
            accessor: 'mark',
          },
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
  const [InitialLoading, setInitialLoading] = useState(true)
  const [{token, user}, dispatch] = useDataLayerValue()
  const [template, setTemplate] = useState()

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
    const templateID = props.match?.params?.templateid ?? 0

    const getTemplate = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/templates/' + templateID,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    const getCategories = axios({
      ...axioDefaultConfig,
      method: 'get',
      url:
        process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
        '/api/templates/' +
        templateID +
        '/categories',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    axios
      .all([getTemplate, getCategories])
      .then(
        axios.spread((...responses) => {
          const getTemplateResponse = responses[0]
          const getCategoryResponse = responses[1]
          if (
            getTemplateResponse?.data?.status === 'S' &&
            getCategoryResponse?.data?.status === 'S'
          ) {
            data = getCategoryResponse?.data?.result
            setGlobalFilter('')
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
      isActive: true,
    },
  ]

  return (
    <>
      <PageTitle breadcrumbs={breadCrumb}>{template.name} Categories</PageTitle>
      <div className='row gy-5 g-xl-12'>
        <div className={`card`}>
          {/* begin::Header */}
          <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>All Categories Record(s)</span>
              <span className='text-muted mt-1 fw-bold fs-7'> {data.length} Registered</span>
            </h3>
            <ErrorMessage error={error} />
            <div
              className='card-toolbar'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              data-bs-trigger='hover'
              title=''
            >
              <div className='me-4'>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={''}
                  setGlobalFilter={setGlobalFilter}
                />
              </div>
              {user.role == 'Overleap_Administrator' && (
                <a
                  href={'/template/' + template.code + '/category/new'}
                  className='btn btn-sm btn-light-primary'
                  // data-bs-toggle='modal'
                  // data-bs-target='#kt_modal_invite_friends'
                >
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                  New Category
                </a>
              )}
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body py-3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table
                className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
                {...getTableProps()}
              >
                <thead>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Name</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Mark</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>is Active</td>
                  {/* {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}*/}
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
                        <td>{row.values.name}</td>
                        <td>{row.values.mark}</td>
                        <td>
                          {row.values.isActive && (
                            <a className='btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3'>
                              Active
                            </a>
                          )}
                          {!row.values.isActive && (
                            <a className='btn btn-sm btn-light-danger fw-bolder ms-2 fs-8 py-1 px-3'>
                              Disabled
                            </a>
                          )}
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a
                              href={
                                '/template/' +
                                template.code +
                                '/categories/' +
                                row.values.code +
                                '/field/all'
                              }
                              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                            >
                              view feilds
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a
                              href={
                                '/template/' + template.code + '/category/edit/' + row.values.code
                              }
                              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                            >
                              <KTSVG
                                path='/media/icons/duotune/art/art005.svg'
                                className='svg-icon-3'
                              />
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
                <li
                  className='page-item'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <a className='page-link'>{'<'}</a>
                </li>
                <li className='page-item' onClick={() => nextPage()} disabled={!canNextPage}>
                  <a className='page-link'>{'>'}</a>
                </li>
                <li
                  className='page-item'
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
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
            </div>
            {/* end::Table container */}
          </div>
          {/* begin::Body */}
        </div>
      </div>
    </>
  )
}

export default CategoryAllWrapper
