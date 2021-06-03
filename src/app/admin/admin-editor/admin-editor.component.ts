import { AfterViewInit, Component } from '@angular/core';
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'lgd-admin-editor',
  template: `
    <p>Welcome to the editor :)</p>
    <textarea id="md-editor"></textarea>
  `,
})
export class AdminEditorComponent implements AfterViewInit {
  simplemde;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.simplemde = new SimpleMDE({
      element: document.getElementById('md-editor'),
    });
  }
}
