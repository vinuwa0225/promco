/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
import { useDataLayerValue } from '../../../../DataLayer'

export function AsideMenuMain() {
  const intl = useIntl()
  const [{ user }, dispatch] = useDataLayerValue()

  if (user.role == "HR") {
    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />
  
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>
  
        <AsideMenuItem
          to='/training/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Trainings"
          fontIcon='bi-app-indicator'
        />
      </>)
  }

  if (user.role == "Shared_Service") {
    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />
  
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>
    <AsideMenuItem
          to='/shared-service/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Shared Service"
          fontIcon='bi-app-indicator'
        />
      </>)
  }
  
/*

  if (user.role == "Marshal") {
    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/incident/new'
          icon='/media/icons/duotune/art/art002.svg'
          title="New Incident"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem to='/monitor/new' icon='/media/icons/duotune/art/art002.svg'
          title='New Observation' fontIcon='bi-app-indicator' ></AsideMenuItem>
      </>)
  }

  if (user.role == "Content_Admin") {
    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/incident/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Incidents"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItemWithSub
          to='/monitor/all'
          title='Observations'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/layouts/lay005.svg'
        >
          <AsideMenuItem to='/monitor/new' title='New Observation' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/monitor/all' title='All Observations' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub >

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Reports</span>
          </div>
        </div>


        <AsideMenuItemWithSub
          to='#'
          title='Reports'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil002.svg'
        >
          <AsideMenuItem to='/report/finalindex' title='Final Index' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/report/log' title='Download Log' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub>

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Master</span>
          </div>
        </div>

        <AsideMenuItem
          to='/transporter/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Transporters"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/driver/all'
          icon='/media/icons/duotune/communication/com006.svg'
          title="Drivers"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/helper/all'
          icon='/media/icons/duotune/communication/com006.svg'
          title="Helpers"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/vehicle/all'
          icon='/media/icons/duotune/ecommerce/ecm006.svg'
          title="Vehicles"
          fontIcon='bi-app-indicator'
        />



      </>)
  }

  if (user.role == "Administrator") {
    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/incident/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Incidents"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItemWithSub
          to='/monitor/all'
          title='Observations'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/layouts/lay005.svg'
        >
          <AsideMenuItem to='/monitor/new' title='New Observation' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/monitor/all' title='All Observations' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub >

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Reports</span>
          </div>
        </div>


        <AsideMenuItemWithSub
          to='#'
          title='Reports'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil002.svg'
        >
          <AsideMenuItem to='/report/finalindex' title='Final Index' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/report/log' title='Download Log' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub>

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Master</span>
          </div>
        </div>

        <AsideMenuItem
          to='/transporter/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Transporters"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/driver/all'
          icon='/media/icons/duotune/communication/com006.svg'
          title="Drivers"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/helper/all'
          icon='/media/icons/duotune/communication/com006.svg'
          title="Helpers"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/vehicle/all'
          icon='/media/icons/duotune/ecommerce/ecm006.svg'
          title="Vehicles"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Administrator</span>
          </div>
        </div>


        <AsideMenuItemWithSub
          to='#'
          title='Master Data'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/medicine/med001.svg'
        >
          <AsideMenuItem to='/medical/all' title='New Medical Types' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/training/all' title='All Training Types' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/vehicle-category/all' title='Vehciles Category' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/operation/all' title='Operations' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/template/all' title='All Templates' hasBullet={true}></AsideMenuItem>

        </AsideMenuItemWithSub>

      </>)
  }

  if (user.role == "Report_Viewer") {

    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/layouts/lay009.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/incident/all'
          icon='/media/icons/duotune/art/art002.svg'
          title="Incidents"
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItemWithSub
          to='/monitor/all'
          title='Observations'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/layouts/lay005.svg'
        >
          <AsideMenuItem to='/monitor/all' title='All Observations' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub >

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Reports</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='#'
          title='Reports'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil002.svg'
        >
          <AsideMenuItem to='/report/finalindex' title='Final Index' hasBullet={true}></AsideMenuItem>
          <AsideMenuItem to='/report/log' title='Download Log' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub>
      </>
    )
  }

  if (user.role == "Overleap_Administrator") {

    return (
      <>
        <AsideMenuItem
          to='/user/all'
          title='Users Management'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/communication/com006.svg'
        >
        </AsideMenuItem >
        <AsideMenuItem
          to='/admin/settings'
          title='Settings'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/coding/cod001.svg'
        >
        </AsideMenuItem >
      </>
    )
  }*/

  return (
    <>

    </>
  )
}
