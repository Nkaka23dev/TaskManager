import { ProjectsComponent } from './projects/projects.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  exports:[DashboardComponent,AboutComponent,MyProfileComponent,ProjectsComponent]
})
export class AdminModule { }
