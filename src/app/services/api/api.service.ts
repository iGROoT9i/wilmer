import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../model/login.interface';
import { Response } from '../../model/response.interface';
import { Estudiante } from '../../model/estudiante.interface';
import { Facultad } from '../../model/facultad.interface';
import { Asistencia } from 'src/app/model/asistencia.interface';
import { ResponseI } from 'src/app/model/responseI.interface';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://20.197.231.12:8002/"
  url2:string = "http://20.197.231.12:8005/"


  constructor(private http:HttpClient) { }


  loginByUsuario():Observable<Response[]>{
    let direccion = this.url + "listar-persona";

    return this.http.get<Response[]>(direccion);
  }

  listarEstudiante():Observable<Estudiante[]>{
    let direccion =  this.url2 + "listar-estudiante";

    return this.http.get<Estudiante[]>(direccion);
  }

  listarFacultad():Observable<Facultad[]>{
    let direccion = "http://20.197.231.12:8003/listar-facultad";

    return this.http.get<Facultad[]>(direccion);
  }

  
  listarTaller():Observable<Facultad[]>{
    let direccion = "http://20.197.231.12:8004/listar-taller";

    return this.http.get<Facultad[]>(direccion);
  }

  crearProyect():Observable<Facultad[]>{
    let direccion = "http://20.197.231.12:8004/crear-proyecto";

    return this.http.get<Facultad[]>(direccion);
  }


  crearAsistencia(form:Asistencia):Observable<ResponseI>{
    let direccion = "http://20.197.231.12:8005/crear-asistencia";

    return this.http.put<ResponseI>(direccion,form);
  }
}
