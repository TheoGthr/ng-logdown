import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'resume',
  template: `
    <div class="theme-base-09">
      <tgr-sidebar></tgr-sidebar>
      <div class="content container">
        <resume-experiences
          class="resume-card resume-left"
        ></resume-experiences>
        <div class="resume-right">
          <resume-education class="resume-card"></resume-education>
          <resume-interests></resume-interests>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['resume.component.scss'],
})
export class ResumeComponent {
  public articles: any;

  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
