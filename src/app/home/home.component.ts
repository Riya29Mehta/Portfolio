import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_Services/projects.service';
import { Project } from '../_model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private titleService: Title, private projectService : ProjectsService){
    this.titleService.setTitle('Riya Mehta - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(0)
  }

  featuredProject = {} as Project;
}
