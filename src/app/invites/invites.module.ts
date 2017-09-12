import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { InviteListComponent } from './components/invite-list/invite-list.component';
import { InvitesComponent } from './components/invites/invites.component';
import { InviteItemComponent } from './components/invite-item/invite-item.component';

// modules 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material';
import { InvitesRoutesModule } from './invites.routes';

// services
import { InvitesService } from './invites.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    InvitesRoutesModule
  ],
  declarations: [
    InviteListComponent, 
    InvitesComponent, 
    InviteItemComponent
  ],
  providers: [
    InvitesService
  ]
})
export class InvitesModule { }
