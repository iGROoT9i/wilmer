import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

user:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("user")!=""){

      this.user=false;

    }else{
      this.user=true;

      this.router.navigate(['/usuario/login'])
    }
  }

  salir(){
    localStorage.setItem("user","")
    this.router.navigate(['/usuario/login'])
  }

}
