import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() contact: any;
  ContactID: string;
  ContactName: string;
  ContactTel: string;
  ContactEmail: string;

  ngOnInit(): void {
    this.ContactID = this.contact.ContactID;
    this.ContactName = this.contact.ContactName;
    this.ContactTel = this.contact.ContactTel;
    this.ContactEmail = this.contact.ContactEmail;
  }

  addContact() {
    console.log("Add Contact Click");
    var value = {
      ContactID: this.ContactID,
      ContactName: this.ContactName,
      ContactTel: this.ContactTel,
      ContactEmail: this.ContactEmail,
    }
    this.service.addContact(value).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateContact() {
    console.log("Update Contact Click");
    var value = {
      ContactID: this.ContactID,
      ContactName: this.ContactName,
      ContactTel: this.ContactTel,
      ContactEmail: this.ContactEmail,
    }
    this.service.updateContact(value).subscribe(res =>{
      alert(res.toString());
    });
  }

}
