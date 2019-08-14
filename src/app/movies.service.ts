import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseApiPath = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){
    return  this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getApiKey(): string{
    return "fe345a1e5cdbf9c5d2d77ca6e03dae18";
  }
}
