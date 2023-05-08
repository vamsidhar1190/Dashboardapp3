import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TreeTableModule } from 'primeng/treetable';
import { LoginComponent } from './login/login.component';
import { CarouselModule } from 'primeng/carousel';
import { TimelineModule } from 'primeng/timeline';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ChatComponent } from './chat/chat.component';
import { FaqComponent } from './faq/faq.component';
import { ElementsComponent } from './elements/elements.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartboxesComponent } from './chartboxes/chartboxes.component';
import { ProfileboxComponent } from './profilebox/profilebox.component';
import { EventsComponent } from './events/events.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    Dashboard2Component,
    RegisterComponent,
    ForgotpasswordComponent,
    MailboxComponent,
    ChatComponent,
    FaqComponent,
    ElementsComponent,
    WidgetsComponent,
    ChartboxesComponent,
    ProfileboxComponent,
    EventsComponent,
    ChartjsComponent,
    ApexchartsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    FormsModule,
    NgApexchartsModule,
    TreeTableModule,
    CarouselModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
