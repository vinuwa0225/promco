import clsx from 'clsx'
import { NONAME } from 'dns'
import React, { FC } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { HeaderNotificationsMenu, HeaderUserMenu, QuickLinks, Search } from '../../../partials'
import { useLayout } from '../../core'
import { useDataLayerValue } from '../../../../DataLayer'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'

const Topbar: FC = () => {
  const { config } = useLayout()
  const [{ user }, dispatch] = useDataLayerValue()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* Search
      <div className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}>
        <Search />
      </div> */}
      {/* Activities
      <div style={{ display: 'none' }} className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <div
          className={clsx('btn btn-icon btn-active-light-primary', toolbarButtonHeightClass)}
          id='kt_activities_toggle'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen032.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
      </div>
 */}
      {/* Quick links
      <div style={{ display: 'none' }} className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <div
          className={clsx('btn btn-icon btn-active-light-primary', toolbarButtonHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen025.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
        <QuickLinks />
      </div> */}

      {/* CHAT 
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>

        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary position-relative',
            toolbarButtonHeightClass
          )}
          id='kt_drawer_chat_toggle'
        >
          <KTSVG
            path='/media/icons/duotune/communication/com012.svg'
            className={toolbarButtonIconSizeClass}
          />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div>

      </div>
*/}
      {/* NOTIFICATIONS 
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary position-relative',
            toolbarButtonHeightClass
          )}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen022.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
        <HeaderNotificationsMenu />
      </div>*/}

      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <span style={{ fontSize: "30px" }} className='badge badge-light-success fw-bolder  px-2 py-1 ms-2'>{user.firstName[0]}</span>
        </div>
        <HeaderUserMenu />

      </div>

      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export { Topbar }
