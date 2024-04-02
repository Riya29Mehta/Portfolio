// import { Component, Input } from '@angular/core';
// import { Project } from '../../_model/project';
// // import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
// import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
// import { ProjectModalComponent } from '../../project-modal/project-modal.component';

// @Component({
//   selector: 'app-project-card',
//   templateUrl: './project-card.component.html',
//   styleUrl: './project-card.component.css'
// })
// export class ProjectCardComponent {
//   @Input() project = {} as Project;
//   modalRef!: NgbModalRef;

//   // bsModalRef ?: BsModalRef;

//   // constructor(private modalService: BsModalService){

//   // }
//   constructor(private modalService: NgbModal) { }

//   openModal() {
//     const ModalOptions: NgbModalOptions = {
//       class: "modal-lg",
//       centered: true,
//       initialState: {
//         project : this.project
//       }
//     }
//     this.modalRef = this.modalService.open(ProjectModalComponent, ModalOptions);
//   }
// }


import { Component, Input } from '@angular/core';
import { Project } from '../../_model/project';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  openModal() {
    const modalOptions: NgbModalOptions = {
      windowClass: 'modal-lg',
      centered: true,
    };
    this.modalRef = this.modalService.open(ProjectModalComponent, modalOptions);
    this.modalRef.componentInstance.project = this.project; // Pass data to the modal component
    this.modalRef.componentInstance.modalRef = this.modalRef; // Pass the modalRef to the modal component

  }
}


