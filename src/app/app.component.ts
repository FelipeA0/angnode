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
      .consulta('http://node2-env.eba-cbx2nejh.us-east-2.elasticbeanstalk.com/user')
      .subscribe((res: any) => console.log(res));
    let id = 7; //id a consultar
    this.apisService
      .consultaPorId(`http://node2-env.eba-cbx2nejh.us-east-2.elasticbeanstalk.com/user/${id}`)
      .subscribe((res: any) => console.log(res));
    let name = 'Luisa';
    let lastname = 'Alavarez';
    let contact = 'luisa@live.com';
    let cellphone = '582169';
    this.apisService
      .alta('http://node2-env.eba-cbx2nejh.us-east-2.elasticbeanstalk.com/user', name, lastname, contact, cellphone)
      .subscribe((res: any) => console.log(res));
    let body = {
      name: 'Salvador',
      lastname: 'Padilla',
      contact: 'chava@live.com',
      cellphone: '98753',
    };
    this.apisService
      .alta2('http://node2-env.eba-cbx2nejh.us-east-2.elasticbeanstalk.com/user', body)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
