import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.interface';

import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lista: any[] = [];
  lista2: any[] = [];
  lista3: any[] = [];

  usuario: [] = [];

  estudiante: any[] = [];

  facultad: any[] = [];
  nombre?:string;
  dni?:string;


  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.loginByUsuario().subscribe((response) =>{
      this.lista=Object.values(response);


      let usuariol = localStorage.getItem("user");

      for(var index in this.lista)
      { 
          // console.log(this.lista[0][index]);
          
          if(this.lista[0][index]['no_PERSONA'] == usuariol){
            

            this.usuario = this.lista[0][index];

            this.nombre = this.lista[0][index]['no_PERSONA']
            this.dni = this.lista[0][index]['nu_DNI']

      

            console.log(this.usuario);
            console.log("es igual")
          }


      }
    })


    this.api.listarEstudiante().subscribe((response) =>{
      this.lista2=Object.values(response);

      let id = localStorage.getItem("id");

      for(var index in this.lista2)
      { 
          //  console.log(this.lista2[0][index]);
          
          if(this.lista2[0][index]['id_PERSONA'] == id){
            

            this.estudiante = this.lista2[0][index];

            localStorage.setItem("idfac",this.lista2[0][index]['id_FACULTAD'])

            // console.log(this.estudiante);
            console.log("es igual")
          }


      }
    })

    this.api.listarFacultad().subscribe((response) =>{
      this.lista3=Object.values(response);

      // console.log(response)

      let id = localStorage.getItem("idfac");

      for(var index in this.lista3)
      { 
          // console.log(this.lista3[index]['no_FACULTAD']);
          
          if(this.lista3[index]['id_FACULTAD'] == id){
            

            this.facultad = this.lista3[index]['no_FACULTAD'];
            console.log(this.facultad);

            console.log("es igual")
          }


      }
    })
  }

}
