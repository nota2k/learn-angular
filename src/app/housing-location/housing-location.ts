import { Component, Input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationInfo;
}
