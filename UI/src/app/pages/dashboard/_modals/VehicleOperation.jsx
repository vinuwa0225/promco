import React, {FC, PureComponent, useEffect, useState} from 'react'
import {
  BarChart,
  LineChart,
  PieChart,
  Pie,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {setInterval} from 'timers'
import axios from 'axios'
import {useDataLayerValue} from '../../../../DataLayer'
import {axioDefaultConfig, options, phoneRegex} from '../../../ui/common/commonResource'
import {stat} from 'fs'

function VehicleOperation() {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [{token}, dispatch] = useDataLayerValue()
  const [state, setState] = useState([])
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  const RADIAN = Math.PI / 180

  useEffect(() => {
    const getddtdata = axios({
      ...axioDefaultConfig,
      method: 'get',
      url:
        process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/report/transportervehicleoperation',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    axios
      .all([getddtdata])
      .then(
        axios.spread((...responses) => {
          const getddtdataResponse = responses[0]
          if (getddtdataResponse?.data?.status === 'S') {
            /*Object.assign(obj, {
              pending_ddt:
                obj.all_Drivers -
                (obj.ddT_Completed + obj.ddT_Practical_Completed + obj.ddT_Theory_Completed),
            })
*/
            var data = []
            getddtdataResponse?.data?.result.map((item) => {
              data.push({name: item.name, value: item.count})
            })
            setState(data)
            setInitialLoading(false)
          }
        })
      )
      .catch(function (error) {
        handleErros(error)
      })
  }, [])

  function handleErros(error) {
    if (error?.response?.status === 401) {
      dispatch({
        type: 'SET_TOKEN',
        token: null,
      })
      return
    }
  }

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Vehicle contribution In Operation</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Transpoter Wise</span>
        </h3>

        <div className='card-toolbar'>
          {/* begin::Menu */}

          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}

      <div className='card-body pt-2'>
        {InitialLoading && (
          <>
            <div className='fs-6 text-gray-600 text-gray-800 fw-bolder pe-7'>
              <span
                className='spinner-border spinner-border-lg align-middle ms-2'
                style={{marginRight: '15px'}}
              ></span>
              Loading...
            </div>{' '}
          </>
        )}

        {!InitialLoading && (
          <ResponsiveContainer width='100%' height={300}>
            <PieChart height={300}>
              <Pie
                data={state}
                cx='50%'
                cy='50%'
                outerRadius={100}
                dataKey='value'
                labelLine={false}
                label={({cx, cy, midAngle, innerRadius, outerRadius, percent, value, index}) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      fill='white'
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline='central'
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  )
                }}
              >
                {state.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign='bottom' align='center' />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
      {/* end::Body */}
    </div>
  )
}

export default VehicleOperation
