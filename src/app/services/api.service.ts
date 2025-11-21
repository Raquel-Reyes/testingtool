import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ApiRequest } from '../interfaces/api-request';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  async sendRequest(request: ApiRequest): Promise<ApiResponse> {
    const headersObj: Record<string, string> = {};

    request.headers.forEach(h => {
      if (h.key && h.value) {
        headersObj[h.key] = h.value;
      }
    });

    const headers = new HttpHeaders(headersObj);
    const startTime = performance.now();

    const response = await firstValueFrom(
      this.http.request(request.method, request.url, {
        body: request.body ? JSON.parse(request.body) : undefined,
        headers,
        observe: 'response'
      })
    );

    return {
      status: response.status,
      time: performance.now() - startTime,
      body: response.body
    };
  }
}
