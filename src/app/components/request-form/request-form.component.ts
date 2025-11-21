import { Component } from '@angular/core';
import { ApiRequest } from '../../interfaces/api-request';
import { ApiResponse } from '../../interfaces/api-response';
import { ApiService } from '../../services/api.service';
import { ResponseViewerComponent } from '../response-viewer/response-viewer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ResponseViewerComponent
  ],
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})

export class RequestFormComponent {

  url = '';
  method = 'GET';
  body = '';
  headers = [{ key: '', value: '' }];

  response?: ApiResponse;

  constructor(private apiService: ApiService) { }

  addHeader() {
    this.headers.push({ key: '', value: '' });
  }
  sendRequest() {
    const requestData: ApiRequest = {
      url: this.url,
      method: this.method,
      headers: this.headers,
      body: this.body || undefined
    };

    this.apiService.sendRequest(requestData)
      .then(res => {
        this.response = res;
      })
      .catch(err => {
        this.response = {
          status: err.status || 0,
          time: 0,
          body: err.error || err.message
        };
      });
  }
  removeHeader(index: number) {
  this.headers.splice(index, 1);
}


}
