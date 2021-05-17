import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Catalogue URL; calling the 'local' API will proxy through to the remote endpoint because of the proxy.conf.js
const CATALOGUE_URL: string = '/api/catalogue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'test-app-frontend';
  constructor(
    private http: HttpClient
  ) {
  }

  // Template doesn't not include routing, but feel free to add this if you want to use in implementation

  ngOnInit(): void {

  }
}
