import { Component, inject } from '@angular/core';
import { DocumentEditorComponent } from './components/document-editor/document-editor.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, DocumentEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private dataService = inject(DataService);
  data$ = this.dataService.data$;
  dataErrors$ = this.dataService.dataErrors$;
}
