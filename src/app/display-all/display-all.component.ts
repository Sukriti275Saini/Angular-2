import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../../myservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  display;

  constructor(
    private showservice : MyservicesService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  showAll(){
    this.showservice.getAll().subscribe(response =>{
      this.display = response
    });
  }

}
