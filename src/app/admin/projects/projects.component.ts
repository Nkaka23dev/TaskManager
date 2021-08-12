import { ProjectsService } from './../../projects.service';
import { Project } from './../../project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any 
  newProject:Project=new Project() 

  editProject:Project=new Project() 
  editIndex:any=null 

  deleteProject:Project=new Project()
  deleteIndex:any=null 

  searchValue:any="";

  constructor(private projectService:ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(
      (response:Project[])=>{
        this.projects=response
      },
      (error)=>{
       console.log("Error: ",error)
       alert("Authentication Failed.")
      }
    )
  }

  onSaveClick(){
    this.projectService.insertProject(this.newProject).subscribe(
      (response)=>{
        //add Project to grid
       var p:Project=new Project();
       p.id=response.id
       p.projectName=response.projectName
       p.DateOfStart=response.DateOfStart
       p.projectSize=response.projectSize

       this.projects.push(p);

        //clear new Project dialog-text box

        this.newProject.id=null
        this.newProject.projectName=null
        this.newProject.DateOfStart=null
        this.newProject.projectSize=null
      },
      (error)=>{
        console.log("Error occured.")
      }
    )
  } 
  onEditClick(event:any,index:number){
    this.editProject.id=this.projects[index].id
    this.editProject.projectName=this.projects[index].projectName
    this.editProject.DateOfStart=this.projects[index].DateOfStart 
    this.editProject.projectSize=this.projects[index].projectSize 
    this.editIndex=index
  } 
  OnUpdateClick(){
    this.projectService.UpdateProject(this.editProject).subscribe(
      (response:Project)=>{
        var p:Project=new Project()
        p.id=response.id
        p.projectName=response.projectName 
        p.DateOfStart=response.DateOfStart
        p.projectSize=response.projectSize 
        this.projects[this.editIndex]=p 

        this.editProject.id=null 
        this.editProject.projectName=null 
        this.editProject.DateOfStart=null 
        this.editProject.projectSize=null
      },
      (error)=>{
        console.log(error)
      }
    )
  } 

  getElementToDelete(event:any,index:number){
  this.deleteProject.id=this.projects[index].id
  this.deleteProject.projectName=this.projects[index].projectName
  this.deleteProject.DateOfStart=this.projects[index].DateOfStart 
  this.deleteProject.projectSize=this.projects[index].projectSize 
  this.deleteIndex=index 
  } 
  OnDeleteClick(){ 
    this.projectService.deleteProject(this.deleteProject.id).subscribe(
      (response)=>{
        this.projects.splice(this.deleteIndex,1)
        this.deleteProject.id=null
        this.deleteProject.projectName=null 
        this.deleteProject.DateOfStart=null 
        this.deleteProject.projectSize=null 
      },
      (error)=>{
        console.log(error)
      }
    )

  }
  onSearchClick(){
   this.projectService.searchProject(this.searchValue).subscribe(
     (response)=>{
       this.projects=response
     },
     (error)=>{
       console.log(error)
     }
   )
  }

}
