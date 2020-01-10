import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCitys(idState) {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    return this .http.get< any[]>(url + idState + '/municipios' );
  }

  public getHsp(){
    return [
      {
        id: 21,
        name: 'Maranhão',
        goal: 5.38
      },
      {
        id: 22,
        name: 'Piauí',
        goal: 5.52
      },
      {
        id: 23,
        name: 'Ceará',
        goal: 5.47
      },
      {
        id: 24,
        name: 'Rio Grande do Norte',
        goal: 5.56
      },
      {
        id: 25,
        name: 'Paraíba',
        goal: 5.44
      },
      {
        id: 26,
        name: 'Pernambuco',
        goal: 5.38
      },
      {
        id: 27,
        name: 'Alagoas',
        goal: 5.84
      },
      {
        id: 28,
        name: 'Sergipe',
        goal: 5.84
      },
      {
        id: 29,
        name: 'Bahia',
        goal: 5.02
      },
      {
        id: 31,
        name: 'Minas Gerais',
        goal: 5.84
      },
      {
        id: 32,
        name: 'Espírito Santo',
        goal: 4.68
      },
      {
        id: 33,
        name: 'Rio de Janeiro',
        goal: 4.40
      },
      {
        id: 35,
        name: 'São Paulo',
        goal: 4.74
      },
      {
        id: 41,
        name: 'Paraná',
        goal: 4.53
      },
      {
        id: 42,
        name: 'Santa Catarina',
        goal: 4.25
      },
      {
        id: 43,
        name: 'Rio Grande do Sul',
        goal: 4.53
      },
      {
        id: 50,
        name: 'Mato Grosso do Sul',
        goal: 4.92
      },
      {
        id: 51,
        name: 'Mato Grosso',
        goal: 4.88
      },
      {
        id: 52,
        name: 'Goiás',
        goal: 4.98
      },
    ]
  }

  public getStates() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    return this.http.get<any[]>(url);
  }
}
