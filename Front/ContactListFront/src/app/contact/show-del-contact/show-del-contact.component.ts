import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-contact',
  templateUrl: './show-del-contact.component.html',
  styleUrls: ['./show-del-contact.component.css']
})
export class ShowDelContactComponent implements OnInit {

  constructor(private service: SharedService) { }

  ContactList: any = [];
  ModalTitle: string;
  ActivateAddEditContactComponent: boolean = false;
  contact: any;

  ngOnInit(): void {
    this.refreshContactList();
  }

  addClick() {
    console.log("Add Click");
    this.contact = {
      ContactID: 0,
      ContactName: "",
      ContactTel: "",
      ContactEmail: ""
    }
    this.ModalTitle = "Add Contact";
    this.ActivateAddEditContactComponent = true;
  }

  editClick(item) {
    console.log("Edit Click");
    this.contact =  item;
    this.ModalTitle = "Edit Contact";
    this.ActivateAddEditContactComponent = true;
  }

  closeClick() {
    console.log("Close Click");
    this.ActivateAddEditContactComponent = false;
    this.refreshContactList();
  }

  deleteClick(item) {
    console.log("Delete Click");
    if(confirm('Are you sure?')){
      this.service.deleteContact(item.ContactID).subscribe(data =>{
        alert(data.toString());
        this.refreshContactList();
      })
    }
  }

  refreshContactList() {
    this.service.getContactList().subscribe(data => {
      this.ContactList = data;
    });
  }
}
