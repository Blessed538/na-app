import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-single-unit',
  templateUrl: './view-single-unit.component.html',
  styleUrls: ['./view-single-unit.component.css'],
})
export class ViewSingleUnitComponent implements OnInit {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {}
}
