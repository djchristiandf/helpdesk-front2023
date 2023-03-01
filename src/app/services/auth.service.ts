import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    return this.http.post('http://localhost:8080/login')
  }
}
