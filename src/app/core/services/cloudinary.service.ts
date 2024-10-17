import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  private cloudName = environment.cloudName;
  private apiKey = environment.apiKey;
  private apiSecret = environment.apiSecret;
  

  constructor(private http: HttpClient) { }

  getImagesFromFolder(): Observable<any> {
    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/resources/image/list/y-fotos`;

    return this.http.get<any>(url, {
      headers: {
        Authorization: `Basic ${btoa(`${this.apiKey}:${this.apiSecret}`)}`
      }
    });
  }

}
