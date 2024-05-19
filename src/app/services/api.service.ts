import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  getUserRepos(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}/repos`);
  }
}
