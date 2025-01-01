import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MoviesComponent } from "../movies/movies.component";
import { HttpClientModule } from '@angular/common/http';;
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, MoviesComponent, HttpClientModule, CommonModule]
})
export class HomeComponent {

}
