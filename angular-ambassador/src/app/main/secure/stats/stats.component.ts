import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../../../app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  links = [];
  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.stats().subscribe(
      stats => {
        this.links = stats;
      }
    )
  }

}
