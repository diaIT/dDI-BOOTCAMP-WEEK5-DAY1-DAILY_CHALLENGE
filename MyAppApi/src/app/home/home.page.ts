import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readAPI(URL: string) {
    return this.http.get(URL);
  }
  movieApiUrl = '';

  movieData =  {
    title: '',
    description: '',
    episode: ''
  };
  constructor(private http: HttpClient) {
    this.movieApiUrl = 'https://swapi.dev/api/films'
    this.readAPI(this.movieApiUrl)
      .subscribe((data:any) => {
      console.log(data);
      this.movieData.title= data['title'];
      this.movieData.description= data['opening_crawl'];
      this.movieData.episode=data.results['episode_id']
      console.log(this.movieData.title);
    });
  }
}
