import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  public contacts:Contact[]=[{'firstname':'shashi','lastname':"gundala",'phone':"798784564651"},
  {'firstname':'jhon','lastname':"smith",'phone':"987690324398"},
  {'firstname':'smith','lastname':"steve",'phone':"123332129087"},
  {'firstname':'maxi','lastname':"glen",'phone':"743290218298"},
  {'firstname':'stokes','lastname':"ben",'phone':"798465740091"},
  {'firstname':'faf','lastname':"duples",'phone':"098767871234"},
  {'firstname':'devileers','lastname':"Abd",'phone':"876589074325"},
  {'firstname':'virat','lastname':"kohli",'phone':"434235631243"},
  {'firstname':'perry','lastname':"ellyse",'phone':"995594994433"},
  {'firstname':'sara','lastname':"tylor",'phone':"999988887777"},
  {'firstname':'kane','lastname':"william",'phone':"111122223333"},
  ];

  add(info:Contact){
    this.contacts.push(info);
  }
  getData():any{
    return this.contacts;
  }
  removeContact(a:Contact){
    let index=this.contacts.indexOf(a);
    if(index!=-1){
      this.contacts.splice(index,1);
    }
  }
}
