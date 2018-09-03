import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  src;
  list:object;
  constructor(public globalservice:GlobalService,private route: ActivatedRoute){}
  search(){
    console.log('I am clicked');
    // this.route.params.subscribe( params => this.user$ = params.id );
    // this.globalservice.searchMovie().subscribe(data=>{
    //   this.list=Array.of(data);
    //   console.log(this.list);
    // });
  }
}
