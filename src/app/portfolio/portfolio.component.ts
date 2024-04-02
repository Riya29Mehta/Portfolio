import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/project';
import { Tag } from '../_model/Tag';
import { ProjectsService } from '../_Services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  node:boolean=false;
  javascript:boolean=false;
  angular:boolean=false;
  mongodb:boolean=false;
  mysql:boolean=false;
  java:boolean=false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Riya Mehta - Portfolio')
  }
  
  projects = {} as Project[];
  isCollapsed: boolean=true;
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags: Tag[]=[]
    if(this.node){
      filterTags.push(Tag.NODE)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVACRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.mongodb){
      filterTags.push(Tag.MONGODB)
    }
    if(this.mysql){
      filterTags.push(Tag.MYSQL)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }

    this.projects=this.projectService.getProjectsByFilter(filterTags);
  }
}
