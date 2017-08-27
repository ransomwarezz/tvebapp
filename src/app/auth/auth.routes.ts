import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { LoginComponent } from './components/login/login.component';

// guards
import { UnAuthGuard } from './guards/un-auth.guard';


export const AuthRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
  }
]);