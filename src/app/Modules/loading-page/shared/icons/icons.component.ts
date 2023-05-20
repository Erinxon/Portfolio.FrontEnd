import { Component, Input } from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {
  @Input({required: true}) icon?: string;
}
