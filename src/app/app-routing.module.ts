import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',component:SidenavComponent,
    children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'login',component:LoginComponent
      }
    ]
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
