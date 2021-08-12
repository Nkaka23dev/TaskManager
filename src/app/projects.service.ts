import { Project } from './project';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'; 
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService { 
  url="http://127.0.0.1:8000/taskManager/project/"

  constructor(private http:HttpClient) { 
   }
  
   getAllProject():Observable<Project[]>{ 
    var currentUser={access:"",username:""}
    var headers=new HttpHeaders();
    headers=headers.set("Authorization","Bearer") 

    if(sessionStorage.currentUser!=null){
      currentUser=JSON.parse(sessionStorage.currentUser)
      headers=headers.set("Authorization","Bearer "+currentUser.access)
      console.log(currentUser.access)
    }
    return this.http.get<Project[]>(this.url,{headers:headers,responseType:"json"})
    .pipe(map(
      (data:Project[])=>{
        for(let i=0;i<data.length;i++){
         data[i].projectSize=data[i].projectSize*10
        }
        return data
      }
    ))
   }

   insertProject(newProject:Project):Observable<Project>{
    return this.http.post<Project>(this.url,newProject,{responseType:"json"})
   }

   UpdateProject(existingProject:Project):Observable<Project>{
    return this.http.put<Project>(this.url+existingProject.id+'/',
    existingProject,{responseType:"json"})
   } 
   
   deleteProject(projectID:Project):Observable<string>{
    return this.http.delete<string>(this.url+projectID+'/',{responseType:"json"})
   } 

   searchProject(searchValue:any):Observable<Project[]>{
    return this.http.get<Project[]>(this.url+'?'+'search'+'='+searchValue
    ,{responseType:"json"})
   }


}
