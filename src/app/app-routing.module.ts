import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ChatComponent } from './chat/chat.component';
import { FaqComponent } from './faq/faq.component';
import { ElementsComponent } from './elements/elements.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ProfileboxComponent } from './profilebox/profilebox.component';
import { ChartboxesComponent } from './chartboxes/chartboxes.component';
import { EventsComponent } from './events/events.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import * as ApexCharts from 'apexcharts';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';

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
        path:'dashboard2',component:Dashboard2Component
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'register',component:RegisterComponent
      },
      {
        path:'forgotpassword',component:ForgotpasswordComponent
      },
      {
        path:'mailbox',component:MailboxComponent
      },
      {
        path:'chat',component:ChatComponent
      },
      {
        path:'faq',component:FaqComponent
      },
      {
        path:'elements',component:ElementsComponent
      },
      {
        path:'widgets',component:WidgetsComponent
      },
      {
        path:'profilebox',component:ProfileboxComponent
      },
      {
        path:'chartbox',component:ChartboxesComponent
      },
      {
        path:'events',component:EventsComponent
      },
      {
        path:'chartjs',component:ChartjsComponent
      },
      {
        path:'apexcharts',component:ApexchartsComponent
      },
    ]
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
