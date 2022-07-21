import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Login } from '../../model/login.interface'
import { PerfilComponent } from '../perfil/perfil.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm = new FormGroup({
  //   usuario: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required)
  // })

  lista: any[] = [];

  usuario?:string="";
  password?:string="";

  constructor(private router: Router,private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.api.loginByUsuario().subscribe((response) =>{
      this.lista=Object.values(response);


      // console.log(this.lista[0])

      // this.lista.forEach(element => {
      //   console.log(element)
      // });

      for(var index in this.lista)
      { 
          console.log(this.lista[0][index]);
          
          if(this.lista[0][index]['no_PERSONA'] == this.usuario){
           

            console.log("es igual")
            localStorage.setItem("user",this.lista[0][index]['no_PERSONA'])
            localStorage.setItem("id",this.lista[0][index]['id_PERSONA'])


            if(this.lista[0][index]['di_PERSONA'] == "comun"){
              this.router.navigate(['/usuario/perfil'])
            }
            if(this.lista[0][index]['di_PERSONA'] == "Es una estudiante delegada"){
              this.router.navigate(['/admin'])
            }
            
          }else{
            console.log("noooo es igual")

          }
          console.log(this.usuario);


      }

    })

    // this.router.navigate(['/usuario/perfil'])

  }

}
