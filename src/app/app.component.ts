import { Component } from '@angular/core';
import { ApisService } from './apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nodetwo';

  constructor(private apisService: ApisService) {
    this.pruebas();
  }
  pruebas(): void {
    this.apisService
      .consulta('http://localhost:3000/user')
      .subscribe((res: any) => console.log(res));
    let id = 7; //id a consultar
    this.apisService
      .consultaPorId(`http://localhost:3000/user/${id}`)
      .subscribe((res: any) => console.log(res));
    let name = 'Luisa';
    let lastname = 'Alavarez';
    let contact = 'luisa@live.com';
    let cellphone = '582169';
    this.apisService
      .alta('http://localhost:3000/user', name, lastname, contact, cellphone)
      .subscribe((res: any) => console.log(res));
    let body = {
      name: 'Salvador',
      lastname: 'Padilla',
      contact: 'chava@live.com',
      cellphone: '98753',
    };
    this.apisService
      .alta2('http://localhost:3000/user', body)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
