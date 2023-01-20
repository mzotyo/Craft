import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {
  HeaderPresenter,
  HeaderPresenterOutput,
} from './presentation/header/header-presenter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderPresenterOutput;

  headerPresenter = new HeaderPresenter();

  ngAfterViewInit() {
    console.debug(`[AppComponent]:ngOnInit(${this.headerComponent})`);
    this.headerPresenter.subscribe(this.headerComponent);
  }
}
