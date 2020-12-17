import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
public create=true;
public details=false;
public fname=""
public lname=""
public mobile=""
public searchName="";
public found=false;
public foundAt=-1;
//public inputData={};
public contactList:[];
  constructor(public _data:ContactsService) {
    this.contactList=this._data.getData();
    console.log(this.contactList);
   }

  ngOnInit(): void {
    
  }
   addContact() {
     console.log("AddContact");
    this.create=false;
    this.details=true;
    
  }
  Search():boolean{
    
      for(let i=0;i<this.contactList.length;i++){
        console.log(this.contactList[i]['lastname']);
        if(this.contactList[i]['lastname'] == this.searchName){
          console.log("Found");
          this.foundAt=i;
          this.found=true;
          return true;
        }
      }
      console.log("Not Found");
      alert("Data Not Found");
      //this.found=false;
      return false;

  }
  Hidesearch(){
    console.log("in hide search");
    this.searchName=""
    this.foundAt=-1;
    this.found=false;
  }
  cretateNew(){
    console.log("Created");
    this.create=true;
    this.details=false;
    const c=new Contact();
    c.firstname=this.fname;
    c.lastname=this.lname;
    c.phone=this.mobile;
    this._data.add(c);
    //console.log(this.inputData)
    this.contactList=this._data.getData();
    console.log(this.contactList);
    this.fname=""
    this.lname=""
    this.mobile=""
    
  }
  delete(index){
    console.log(index);
    for(let i=0;i<this.contactList.length;i++){
      //console.log(this.contactList[i]['lastname']);
      if(this.contactList[i]['lastname'] == index['lastname']){
        console.log("Found");
        this._data.removeContact(index);
      }
    }
  }
}
