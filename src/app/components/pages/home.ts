import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {fadeInUp } from '../../shared/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [fadeInUp ]
})
export class Home {

}

