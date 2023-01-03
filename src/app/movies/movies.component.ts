import { Component, OnInit } from '@angular/core';

type data = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
})
export class MoviesComponent implements OnInit {
  moviesName: string = '';

  constructor() {}

  moviesData: Array<data> = [];

  loading: boolean = false;

  handleSubmit() {
    this.loading = true;

    console.log(this.moviesName);
    fetch(`http://www.omdbapi.com/?apikey=1af9e5d9&s=${this.moviesName}`)
      .then((res) => res.json())
      .then((res) => {
        this.loading = false;
        this.moviesData = res.Search
        console.log(res.Search);
      });
  }

  ngOnInit(): void {}
}
