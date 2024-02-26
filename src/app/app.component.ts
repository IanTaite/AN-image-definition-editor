import { Component, inject } from '@angular/core';
import { DocumentEditorComponent } from './components/document-editor/document-editor.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DataService } from './services/data.service';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { IImageDefinition } from './image-definitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, DocumentEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private dataService = inject(DataService);
  data$: Observable<{ model: IImageDefinition|null, error: string|null}> = this.dataService.data$.pipe(
    switchMap(data => of({ model: data, error: null })),
    catchError((err) => of({ model: null, error: err }))
  );
}
