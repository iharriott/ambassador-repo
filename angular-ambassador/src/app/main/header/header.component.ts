import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Welcome';
  description = 'Share links to earn money';
  user = null;

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      user => {
        this.user = user;
        if (user) {
          this.title = user ? '$' + user.revenue : 'Welcome';
          this.description = user ? 'You have earned this far' : 'Share Link to earn money';
        }

      }
    )
  }

}
