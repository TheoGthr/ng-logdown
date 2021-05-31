import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SidebarViews } from '../constants';

@Component({
  selector: 'lgd-resume',
  template: `
    <div class="theme-base-09">
      <lgd-sidebar [sidebarView]="sidebarViews.resume"></lgd-sidebar>
      <div class="content container">
        <lgd-resume-experiences
          class="resume-card resume-left"
        ></lgd-resume-experiences>
        <div class="resume-right">
          <lgd-resume-education class="resume-card"></lgd-resume-education>
          <lgd-resume-interests></lgd-resume-interests>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['resume.component.scss'],
})
export class ResumeComponent {
  public sidebarViews = SidebarViews;

  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
