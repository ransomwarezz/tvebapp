import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { InvitesComponent } from './components/invites';

// guards
import { AuthGuard } from '../auth';


export const InvitesRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'invites',
    component: InvitesComponent,
    canActivate: [AuthGuard]
  }
]);
