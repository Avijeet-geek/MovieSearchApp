import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  src: string;
  srcby: string;
  myArray = [];
  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';
  itemValue = '';
  items: Observable<any[]>;
  constructor(public storage: LocalStorage, public db: AngularFireDatabase) {
    this.items = db.list('mvies').valueChanges();
   }

  ngOnInit() {
  }
  search() {
  this.db.list('/mvies').push({ source: this.src, information: this.srcby });
  this.src = '';
  this.srcby = '';

  }

  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }

}
