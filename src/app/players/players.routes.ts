import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { PlayersComponent } from './components/players';

// guards
import { AuthGuard } from '../auth';


export const PlayersRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'players',
    component: PlayersComponent,
    canActivate: [AuthGuard]
  }
]);
