import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'theogthr';

  constructor(private translateService: TranslateService) {
    const browserLang = this.translateService.getBrowserLang();
    let usedLang =
      browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang(usedLang);
    this.translateService.currentLang = usedLang;
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
