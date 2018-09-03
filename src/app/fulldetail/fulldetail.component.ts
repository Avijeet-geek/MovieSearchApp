import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service'; 
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-fulldetail',
  templateUrl: './fulldetail.component.html',
  styleUrls: ['./fulldetail.component.css']
}) 
export class FulldetailComponent implements OnInit {
  datas: any;
  dataId:any; 
  dataInfo:any;
  fullData:any; 
  arr:Object;
  constructor(private route: ActivatedRoute,public globalservice:GlobalService,public storage: LocalStorage) { 
    this.route.params.subscribe( params => this.datas = params );
      this.dataId=this.datas.id;
      this.dataInfo=this.datas.info;
  }


  ngOnInit() {
    this.globalservice.searchMovie(this.dataId,this.dataInfo).subscribe(
      data =>{
        this.fullData=Array.of(data);
        console.log(this.fullData); 
      }); 
  } 

}
