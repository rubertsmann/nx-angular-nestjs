import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPhoto, Message } from '@betcha/api-interfaces';

@Component({
  selector: 'betcha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  mongo$ = this.http.get<IPhoto>('/api/photo');
  photo$ = this.http.post<IPhoto>('/api/photo', {
    name: "testName",
    description: "photo Description",
    filename: "filename.jpg",
    isPublished: false
    } as IPhoto )

  constructor(private http: HttpClient) { }
}
