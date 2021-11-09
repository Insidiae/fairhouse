import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  city: string = '';
  searchResults: Location[] = [];

  housingList: Location[] = this.locationService.getLocations();

  ngOnInit(): void {}

  searchHousing() {
    if (this.city !== '') {
      this.searchResults = this.housingList.filter((location) =>
        location.city.toLowerCase().includes(this.city.toLowerCase())
      );
    }
  }
}
