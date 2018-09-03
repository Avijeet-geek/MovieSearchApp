import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service'; 

@Component({
  selector: 'app-lastdata',
  templateUrl: './lastdata.component.html',
  styleUrls: ['./lastdata.component.css']
})
export class LastdataComponent implements OnInit {
  toDoList: AngularFireList<any>;
  // toDoListArray: any[];
  // toDoListArray = { source: '', information: '' };
  toDoListArray: Array<any> = [];
  ListArray: Array<any> = [];
  j:number;
  k:number;
   l:number;
   dataId:Object; 
   dataInfo:Object;
   datas: Object;
   fullData:Object;
  constructor(private route: ActivatedRoute,private firebasedb: AngularFireDatabase,public globalservice:GlobalService) { 
  }
  getToDoList() {
    this.toDoList = this.firebasedb.list('mvies');
    return this.toDoList;
}
  ngOnInit() {

this.getToDoList().snapshotChanges()
.subscribe(item => {
  this.toDoListArray = [];
  item.forEach(element => {
    const x = element.payload.toJSON();
    x['$key'] = element.key;
    this.toDoListArray.push(x);
  });
  

this.toDoListArray=this.toDoListArray.reverse();
this.toDoListArray=this.toDoListArray.slice(0, 5);

});
console.log(this.dataId,this.dataInfo);

this.globalservice.searchMovie(this.dataId,this.dataInfo).subscribe(
  data =>{
    this.fullData=Array.of(data);
    console.log(this.fullData);
  }); 

}
}

