import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:String=""
  Username:String=""
  Numberofteammember:number=0
  Totalcostofallprojects:number=0
  PendingTask:number=0
  UpcomingProjects:number=0
  projectCost:number =0
  currentExpe:number=0
  availableFund:number=0

  constructor() {
  
   }
  ngOnInit(): void { 
   this.Designation='Team Leader' 
   this.Username='Eric Nkaka'
   this.Numberofteammember=34
   this.Totalcostofallprojects=240 
   this.PendingTask=4
   this.UpcomingProjects=2 
   this.projectCost=23445553 
   this.currentExpe=5633
   this.availableFund=67383
  }

}
