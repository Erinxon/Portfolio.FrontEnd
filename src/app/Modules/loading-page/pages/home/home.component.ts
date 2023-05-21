import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
