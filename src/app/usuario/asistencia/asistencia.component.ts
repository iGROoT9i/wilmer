
import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/model/asistencia.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  dni:string="";
  fecha:Date= new Date("");


  
  
  form:Asistencia = {va_ESTUDIANTE: this.dni,fe_REGISTRO: this.fecha}

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  postform(form:Asistencia){

    this.api.crearAsistencia(form).subscribe(data => {
      console.log(data)
    })
  }

}
