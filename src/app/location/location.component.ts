  import { Component, OnInit } from '@angular/core';
  import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent{
  data = [];
  location='';
  constructor(private _route: ActivatedRoute,private _serviceService: ServiceService){
    this._route.paramMap.subscribe( params => {
      this.location = params.get('location');
      console.log(params.get('location'));
      this.newMethod();
 })

  };

  
  newMethod(){
    this._serviceService.weather(this.location).subscribe( (user: any[]) => { 
      this.data = user;

    });
  }
  

  ngOnInit() {
    
  }

}
