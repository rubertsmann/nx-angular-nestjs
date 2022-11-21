import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@betcha/api-interfaces';

@Component({
  selector: 'betcha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  mongo$ = this.http.get<Message>('/api/photo');
  photo$ = this.http.post('/api/photo', {})

  constructor(private http: HttpClient) {}
}
