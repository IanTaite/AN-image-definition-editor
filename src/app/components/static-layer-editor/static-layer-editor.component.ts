import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { ImageComponentEditorComponent } from '../image-component-editor/image-component-editor.component';
import { IComponent, IImageLayer } from '../../image-definitions';

@Component({
  selector: 'app-static-layer-editor',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    TooltipModule,
    ImageComponentEditorComponent,
  ],
  templateUrl: './static-layer-editor.component.html',
  styleUrl: './static-layer-editor.component.scss',
})
export class StaticLayerEditorComponent implements OnChanges {
  @Input({ required: true }) model!: IImageLayer;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;

  dataService = inject(DataService);
  activeActionMenuConfig: { label: string; items: any[] }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const canMoveEarlier = changes['canMoveEarlier']
      ? changes['canMoveEarlier'].currentValue
      : this.canMoveEarlier;
    const canMoveLater = changes['canMoveLater']
      ? changes['canMoveLater'].currentValue
      : this.canMoveLater;
    this.activeActionMenuConfig = this.buildActiveActionMenuGroups(
      canMoveEarlier,
      canMoveLater,
    );
  }

  private buildActiveActionMenuGroups(
    canMoveEarlier: boolean,
    canMoveLater: boolean,
  ) {
    if (!canMoveEarlier && !canMoveLater) {
      return [...this.actionMenuGroupAddComponents, this.actionMenuGroupDelete];
    } else if (canMoveEarlier && canMoveLater) {
      return [
        this.actionMenuGroupMoveUpAndDown,
        ...this.actionMenuGroupAddComponents,
        this.actionMenuGroupDelete,
      ];
    } else if (canMoveEarlier && !canMoveLater) {
      return [
        this.actionMenuGroupMoveUpOnly,
        ...this.actionMenuGroupAddComponents,
        this.actionMenuGroupDelete,
      ];
    } else {
      // !canMoveEarlier && canMoveLater
      return [
        this.actionMenuGroupMoveDownOnly,
        ...this.actionMenuGroupAddComponents,
        this.actionMenuGroupDelete,
      ];
    }
  }

  private actionMenuGroupMoveUpAndDown = {
    label: 'Move Layer',
    items: [
      {
        label: 'Higher',
        icon: 'pi pi-arrow-up',
        command: () => this.moveLayerEarlier(),
      },
      {
        label: 'Lower',
        icon: 'pi pi-arrow-down',
        command: () => this.moveLayerLater(),
      },
    ],
  };

  private actionMenuGroupMoveUpOnly = {
    label: 'Move Layer',
    items: [
      {
        label: 'Higher',
        icon: 'pi pi-arrow-up',
        command: () => this.moveLayerEarlier(),
      },
    ],
  };

  private actionMenuGroupMoveDownOnly = {
    label: 'Move Layer',
    items: [
      {
        label: 'Lower',
        icon: 'pi pi-arrow-down',
        command: () => this.moveLayerLater(),
      },
    ],
  };

  private actionMenuGroupAddComponents = [
    {
      label: 'Add Component',
      items: [
        {
          label: 'Static Asset',
          icon: 'pi pi-plus',
          command: () => this.addNewComponent(),
        },
      ],
    },
  ];

  private actionMenuGroupDelete = {
    label: 'Delete',
    items: [
      {
        label: 'Delete layer',
        icon: 'pi pi-trash',
        command: () => this.deleteLayer(),
      },
    ],
  };

  private addNewComponent() {
    this.dataService.addComponent(this.model, 1);
  }

  private moveLayerEarlier() {
    this.dataService.moveLayerEarlier(this.model);
  }

  private moveLayerLater() {
    this.dataService.moveLayerLater(this.model);
  }

  private deleteLayer() {
    this.dataService.removeLayer(this.model);
  }

  addNewComponentButton_Click() {
    this.addNewComponent();
  }

  onMoveComponentEarlier(component: IComponent) {
    this.dataService.moveComponentEarlier(this.model, component);
  }

  onMoveComponentLater(component: IComponent) {
    this.dataService.moveComponentLater(this.model, component);
  }

  onDeleteComponent(component: IComponent) {
    this.dataService.removeComponent(this.model, component);
  }
}
