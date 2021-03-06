import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lgd-root',
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    const browserLang = this.translateService.getBrowserLang();
    const usedLang =
      browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang(usedLang);
    this.translateService.currentLang = usedLang;
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
