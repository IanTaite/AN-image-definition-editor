import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { IComponent, IImageLayer } from '../../image-definitions';

@Component({
  selector: 'app-image-component-editor',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    MenuModule,
    TooltipModule,
    FileUploadModule,
  ],
  templateUrl: './image-component-editor.component.html',
  styleUrl: './image-component-editor.component.scss',
})
export class ImageComponentEditorComponent implements OnChanges {
  @Input({ required: true }) layerModel!: IImageLayer;
  @Input({ required: true }) componentModel!: IComponent;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;
  @Output() moveEarlier = new EventEmitter<IComponent>();
  @Output() moveLater = new EventEmitter<IComponent>();
  @Output() deleteComponent = new EventEmitter<IComponent>();

  activeActionMenuConfig: {label: string, items: any[]}[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const canMoveEarlier = changes['canMoveEarlier'] ? changes['canMoveEarlier'].currentValue : this.canMoveEarlier;
    const canMoveLater = changes['canMoveLater'] ? changes['canMoveLater'].currentValue : this.canMoveLater;
    this.activeActionMenuConfig =
      this.buildActiveActionMenuGroups(canMoveEarlier, canMoveLater);
  }

  private buildActiveActionMenuGroups(canMoveEarlier: boolean, canMoveLater: boolean) {
    if (!canMoveEarlier && !canMoveLater) {
      return [
        this.actionMenuGroupDelete
      ];

    } else if (canMoveEarlier && canMoveLater) {
      return [
        this.actionMenuGroupMoveUpAndDown,
        this.actionMenuGroupDelete
      ];

    } else if (canMoveEarlier && !canMoveLater) {
      return [
        this.actionMenuGroupMoveUpOnly,
        this.actionMenuGroupDelete
      ];

    } else { // !canMoveEarlier && canMoveLater
      return [
        this.actionMenuGroupMoveDownOnly,
        this.actionMenuGroupDelete
      ];
    }
  }

  private actionMenuGroupMoveUpAndDown = {
    label: 'Move Component',
    items: [
      {
        label: 'Higher',
        icon: 'pi pi-arrow-up',
        command: () => this.moveEarlier.emit(this.componentModel)
      },
      {
        label: 'Lower',
        icon: 'pi pi-arrow-down',
        command: () => this.moveLater.emit(this.componentModel)
      }
    ]
  };

  private actionMenuGroupMoveUpOnly = {
    label: 'Move Layer',
    items: [
      {
        label: 'Higher',
        icon: 'pi pi-arrow-up',
        command: () => this.moveEarlier.emit(this.componentModel)
      }
    ]
  };

  private actionMenuGroupMoveDownOnly = {
    label: 'Move Layer',
    items: [
      {
        label: 'Lower',
        icon: 'pi pi-arrow-down',
        command: () => this.moveLater.emit(this.componentModel)
      }
    ]
  };

  private actionMenuGroupDelete = {
    label: 'Delete',
    items: [
      {
        label: 'Delete component',
        icon: 'pi pi-trash',
        command: () => this.deleteComponent.emit(this.componentModel)
      }
    ]
  };

  onUpload(event: FileUploadEvent) {
    console.log(event);
    throw new Error('Method not implemented.');
  }
}
