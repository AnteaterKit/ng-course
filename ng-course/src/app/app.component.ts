import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-course';

  constructor(
    private router: Router,
  ) {}

  openApi(): void {
    this.router.navigate(['api']);
  }

  openCustom(): void {
    this.router.navigate(['custom']);
  }
}
