import { Component, Input } from '@angular/core';
import { ImageComponent } from '../../data-model';

@Component({
  selector: 'app-component-editor',
  standalone: true,
  imports: [],
  templateUrl: './component-editor.component.html',
  styleUrl: './component-editor.component.scss'
})
export class ComponentEditorComponent {
  @Input({required: true}) model!: ImageComponent;
}
