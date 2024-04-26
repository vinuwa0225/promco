/* eslint-disable jsx-a11y/anchor-is-valid */
import { PageTitle } from '../../../_metronic/layout/core'
import { useDataLayerValue } from '../../../DataLayer'
function DashboardWrapper() {
  const [{ user }, dispatch] = useDataLayerValue()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>Hello! {user.firstName + ' ' + user.lastName}, Welcome to the Training Attendance Tracking System</h3>
        <div className='d-flex align-items-center my-2'>
          <div className='w-100px me-5'>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardWrapper
