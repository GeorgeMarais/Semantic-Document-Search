import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VertexAiService {

  constructor(private http: HttpClient) { }

  semanticSearch(query: string) {
    const vertexAiEndpoint = `endpoint in progress`;
    const body = {
      query: query
    };

    return this.http.post(vertexAiEndpoint, body);
  }
}
