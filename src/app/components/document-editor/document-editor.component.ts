import {
  Component,
  Input,
  inject,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaticLayerEditorComponent } from '../static-layer-editor/static-layer-editor.component';
import { TextLayerEditorComponent } from '../text-layer-editor/text-layer-editor.component';
import { DataService, LayerType } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { IImageDefinition, IImageLayer } from '../../image-definitions';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    TooltipModule,
    StaticLayerEditorComponent,
    TextLayerEditorComponent
  ],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {
  @Input({ required: true }) model!: IImageDefinition;
  private dataService = inject(DataService);

  layerChoices = [
    {
      label: 'Static',
      icon: 'pi pi-image',
      command: () => this.dataService.addLayer(LayerType.Static),
    },
    {
      label: 'Text',
      icon: 'pi pi-image',
      command: () => this.dataService.addLayer(LayerType.Text),
    }
  ];

  orderedLayers(layers: IImageLayer[]) {
    return layers.sort((a, b) => a.layerPosition - b.layerPosition);
  }

  saveButton_Click() {
    throw new Error('Method not implemented.');
  }
  cancelButton_Click() {
    throw new Error('Method not implemented.');
  }
}
