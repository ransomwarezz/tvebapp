import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PlayersComponent } from './components/players/players.component';

// modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material';
import { PlayersRoutesModule } from './players.routes';

// services
import { PlayersService } from './players.service';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerItemComponent } from './components/player-item/player-item.component'

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule.forRoot(),
    MaterialModule,
    PlayersRoutesModule
  ],
  providers: [
    PlayersService
  ]
})
export class PlayersModule { }
