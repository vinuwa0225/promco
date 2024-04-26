import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import DashboardWrapper from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import TrainingAllWrapper from '../ui/training/allTraining'
import NewTrainingWrapper from '../ui/training/newTraining'

import TrainingSharedServiceAllWrapper from '../ui/sharedservice/allTraining'
import NewTrainingSharedServiceWrapper from '../ui/sharedservice/newTraining'
import Settings from '../ui/admin/settings'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/training/all' component={TrainingAllWrapper} />
        <Route path='/training/new' component={NewTrainingWrapper} />
        <Route path='/training/edit/:id' component={NewTrainingWrapper} />

        <Route path='/shared-service/all' component={TrainingSharedServiceAllWrapper} />
        <Route path='/shared-service/new' component={NewTrainingSharedServiceWrapper} />
        <Route path='/shared-service/edit/:id' component={NewTrainingSharedServiceWrapper} />
        <Route path='/admin/settings' component={Settings} />

        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
