import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { PlayersComponent } from './components/players';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';

// guards
import { AuthGuard } from '../auth';


export const PlayersRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'players',
    component: PlayersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: PlayerProfileComponent,
    canActivate: [AuthGuard]
  }
]);
