import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerEditorComponent } from '../layer-editor/layer-editor.component';
import { ImageDefinition, ImageLayer } from '../../data-model';
import { DataService } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    LayerEditorComponent,
  ],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent implements OnChanges {
  @Input({ required: true }) model!: ImageDefinition;
  private dataService = inject(DataService);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('EditorComponent.ngOnChanges', changes);
  }

  orderedLayers(layers: ImageLayer[]) {
    return layers.sort((a, b) => a.position - b.position);
  }

  addNewLayerButton_Click() {
    this.dataService.addNewLayer({
      id: Date.now().toString(),
      name: 'New Layer',
      position: 0,
      components: [],
    });
  }

  saveButton_Click() {
    throw new Error('Method not implemented.');
  }
  cancelButton_Click() {
    throw new Error('Method not implemented.');
  }
}
