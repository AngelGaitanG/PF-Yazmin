import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fader } from './animations/route-animations';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fader]
})
export class AppComponent implements OnInit, OnDestroy {
  showFooter = false;
  private footerTimer: Subscription | null = null;
  private navigationSubscription: Subscription;

  constructor(private router: Router) {
    this.navigationSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.resetFooterTimer();
    });
  }

  ngOnInit() {
    this.resetFooterTimer();
  }

  ngOnDestroy() {
    if (this.footerTimer) {
      this.footerTimer.unsubscribe();
    }
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  resetFooterTimer() {
    this.showFooter = false;
    if (this.footerTimer) {
      this.footerTimer.unsubscribe();
    }
    this.footerTimer = timer(2000).subscribe(() => {
      this.showFooter = true;
    });
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
