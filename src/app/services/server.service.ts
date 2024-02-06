import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private httpClient:HttpClient
  ) { }

  storageServers(servers: any[]){
    return this.httpClient.put("https://zavrsniprojekat-b8610-default-rtdb.firebaseio.com ", servers);
  }
}
