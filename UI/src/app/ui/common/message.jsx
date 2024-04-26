import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//https://fkhadra.github.io/react-toastify/introduction/
//https://fkhadra.github.io/react-toastify/api/toast

function ErrorMessage(props) {
  const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // and so on ...
  }
  if (!props.error.text) {
    return <></>
  }

  /*
  if (props.error.status === 'E') {
    toast.error(props.error.text)
  } else if (props.error.status === 'S') {
    console.log('ss')
    toast.success(props.error.text)
  }*/

  return (
    <div className='row mb-12 '>
      <ToastContainer />

      <div className='col-lg-12'>
        <div className='overflow-auto pb-5'>
          {props.error.status === 'I' && (
            <div className='notice d-flex bg-light-success rounded border-success border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
              <KTSVG
                path='/media/icons/duotune/coding/cod004.svg'
                className='svg-icon-2tx svg-icon-success me-4'
              />
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>Information</h4>
                  <div className='fs-6 text-gray-600 pe-7'>{props.error.text}</div>
                </div>
              </div>
            </div>
          )}

          {props.error.status === 'E' && (
            <div className='notice d-flex bg-light-danger rounded border-danger border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
              <KTSVG
                path='/media/icons/duotune/coding/cod004.svg'
                className='svg-icon-2tx svg-icon-danger me-4'
              />
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>Error!</h4>
                  <div className='fs-6 text-gray-600 pe-7'>{props.error.text}</div>
                </div>
              </div>
            </div>
          )}

          {props.error.status === 'S' && (
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
              <KTSVG
                path='/media/icons/duotune/coding/cod004.svg'
                className='svg-icon-2tx svg-icon-primary me-4'
              />
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>Record Updated Successfully!</h4>
                  <div className='fs-6 text-gray-600 pe-7'>{props.error.text}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
