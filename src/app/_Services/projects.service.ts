import { Injectable } from '@angular/core';
import { Tag } from '../_model/Tag';
import { Project } from '../_model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: "sample angular project",
      summary: "test desc",
      description: '',
      link: '',
      tags: [Tag.ANGULAR, Tag.JAVACRIPT],
      pictures: ['https://i.imgur.com/HJh7AjT.png','https://i.imgur.com/x4vfnJX.png']
    },
    {
      id: 2,
      name: "sample node project",
      summary: "test desc3",
      description: '',
      link: '',
      tags: [Tag.NODE, Tag.JAVACRIPT],
      pictures: ['https://i.imgur.com/x4vfnJX.png','https://i.imgur.com/HJh7AjT.png']
    },
    {
      id: 2,
      name: "sample java project",
      summary: "test desc3",
      description: '',
      link: '',
      tags: [Tag.JAVA, Tag.JAVACRIPT],
      pictures: []
    }

  ]
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id:number): Project{
    let project = this.projects.find(project => project.id === id)
    if(project===undefined){
      throw new TypeError("Project with such id does not exists");
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[]=[]
    this.projects.forEach(function(project){
      let foundAll=true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false
        }
      })

      if(foundAll){
        filteredProjects.push(project);
      }
    })
    return filteredProjects;

  }
}
