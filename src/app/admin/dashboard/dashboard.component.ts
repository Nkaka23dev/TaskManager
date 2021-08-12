import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation=""
  Username=""
  Numberofteammember=0
  Totalcostofallprojects=0
  PendingTask=0
  UpcomingProjects=0
  projectCost=0
  currentExpe=0
  availableFund=0 
  Clients:any=[]
  Projects:String[]=[] 
  years:Number[]=[] 
  teamMemberSummary:any=[] 
  teamMembers:any=[]
  toDay:Date | undefined;

  constructor(private dashboardService:DashboardService) {
  
   }
  ngOnInit(): void { 
   this.Designation='Team Leader' 
   this.Username='Eric Nkaka'
   this.Numberofteammember=34
   this.Totalcostofallprojects=240 
   this.PendingTask=4
   this.UpcomingProjects=0.2
   this.projectCost=23445553 
   this.currentExpe=5633
   this.availableFund=67383 
   this.Clients=["ABC Info Tech Ltd","GHI Industries","DEF software solutions"] 
   this.Projects=["ProjectA","ProjectB","ProjectC","ProjectD"] 
   this.toDay=new Date()

   for(var i=2020;i>=2010;i--){
    this.years.push(i)
   }
   this.teamMemberSummary=this.dashboardService.teamMemberSummary()
   this.teamMembers=[
    {
    Region:"East",members:[
    {id:1,name:'Ford',status:'Available'},
    {id:2,name:'Miller',status:'Available'},
    {id:3,name:'Jones',status:'Busy'},
    {id:4,name:'James',status:'Busy'}
   ]
  },
  {
    Region:"South",members:[
    {id:5,name:'Nkaka',status:'Available'},
    {id:6,name:'Dalto',status:'Busy'},
    {id:7,name:'Kimbagira',status:'Busy'},
    {id:8,name:'Evelyne',status:'Available'}
   ]
  },
  {
    Region:"West",members:[
    {id:9,name:'Christian',status:'Busy'},
    {id:10,name:'Mike',status:'Available'},
    {id:11,name:'Yve',status:'Busy'},
    {id:12,name:'Adeline',status:'Available'}
   ]
  },
  {
    Region:"North",members:[
    {id:13,name:'Kanyange',status:'Available'},
    {id:14,name:'Frank',status:'Busy'},
    {id:15,name:'Kagesha',status:'Available'},
    {id:16,name:'James',status:'Busy'}
   ]
  },
   ]
  } 
  onProjectChange=($event:any)=>{
  console.log($event.target.innerHTML);
  if($event.target.innerHTML=="ProjectA"){
    this.projectCost=21;
    this.currentExpe=45;
    this.availableFund=68;
  }
  else if($event.target.innerHTML=='ProjectB'){
    this.projectCost=90;
    this.currentExpe=28;
    this.availableFund=45;
  }
  else if($event.target.innerHTML=='ProjectC'){
    this.projectCost=99;
    this.currentExpe=22;
    this.availableFund=44;
  }
  else if($event.target.innerHTML=='ProjectD'){
    this.projectCost=9188;
    this.currentExpe=284;
    this.availableFund=451;
  }
}
  
  
}
