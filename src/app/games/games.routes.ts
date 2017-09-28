import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { GameComponent } from './components/game/game.component';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';

// guards
import { AuthGuard } from '../auth';


export const GamesRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'game-setup',
    component: GameSetupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game-configuration',
    component: GameConfigurationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game-selection',
    component: GameSelectionComponent,
    canActivate: [AuthGuard]
  }
]);
