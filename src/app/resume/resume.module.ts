import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeExperiencesComponent } from './resume-cards/resume-experiences.component';
import { ResumeEducationComponent } from './resume-cards/resume-education.component';
import { ResumeInterestsComponent } from './resume-cards/resume-interests.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeExperiencesComponent,
    ResumeEducationComponent,
    ResumeInterestsComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, CoreModule],
  exports: [],
})
export class ResumeModule {}
