import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule,MatExpansionModule
  ,MatFormFieldModule,MatInputModule,MatGridListModule,MatOptionModule,
  MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatAutocompleteModule,MatTableModule,MatPaginatorModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationAllComponent } from './notification-all/notification-all.component';
import { NotificationClassComponent } from './notification-class/notification-class.component';
import { NotificationPersonalComponent } from './notification-personal/notification-personal.component';
import { AccessLogsComponent } from './access-logs/access-logs.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'notification-all',component:NotificationAllComponent},
  {path:'notification-class',component:NotificationClassComponent},
  {path:'notification-personal',component:NotificationPersonalComponent},
  {path:'access-logs',component:AccessLogsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    NotificationAllComponent,
    NotificationClassComponent,
    NotificationPersonalComponent,
    AccessLogsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    MatOptionModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
