import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import axios from 'axios'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig, options, phoneRegex} from '../common/commonResource'
import {toast} from 'react-toastify'
import {useDataLayerValue} from '../../../DataLayer'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

export default function ImageComponent(props) {
  const [state, setState] = useState({isOpen: false, photoIndex: 0})
  const handleShowDialog = () => {
    setState({isOpen: !state.isOpen})
    console.log('cliked')
  }

  return (
    <div>
      <div className='row'>
        <div className='col-lg-3'>
          {props.selectedFile && (
            <>
              <img onClick={(r) => handleShowDialog()} width='150px' src={props.preview} />
              {state.isOpen && (
                <Lightbox
                  mainSrc={props.preview}
                  onCloseRequest={() => setState({isOpen: false})}
                />
              )}
            </>
          )}
          {!props.selectedFile && (
            <>
              <div
                className='image-input image-input-outline'
                data-kt-image-input='true'
                style={{
                  backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`,
                }}
              >
                {props.profileImage !== undefined && props.profileImage !== '' && (
                  <>
                    <img
                      width='150px'
                      className='imagex'
                      onClick={(r) => handleShowDialog()}
                      src={process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + props.profileImage}
                    />
                    {state.isOpen && (
                      <Lightbox
                        mainSrc={process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + props.profileImage}
                        onCloseRequest={() => setState({isOpen: false})}
                      />
                    )}
                  </>
                )}

                {props.profileImage === undefined ||
                  (props.profileImage === '' && (
                    <>
                      <div
                        className='image-input-wrapper w-125px h-125px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`,
                        }}
                      ></div>
                    </>
                  ))}
              </div>
            </>
          )}
        </div>

        {props.profileImage !== undefined && props.profileImage !== '' && (
          <div className='col-lg-3'>
            <button
              style={{width: '100%'}}
              type='button'
              onClick={(e) =>
                window.confirm('Are you sure you wish to delete this item?')
                  ? props.deleteImage(e)
                  : false
              }
              className='btn  btn-danger'
            >
              <span className='indicator-progress' style={{display: 'block'}}>
                Delete Image
              </span>
            </button>
          </div>
        )}

        <div className='col-lg-6'>
          <input
            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
            type='file'
            onChange={(e) => props.onSelectFile(e)}
          />
        </div>
      </div>
    </div>
  )
}
