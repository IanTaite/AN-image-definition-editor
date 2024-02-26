import { IImageDefinitionPath } from './IImageDefinitionPath';
import { IPosition } from './IPosition';
import { ISet } from './ISet';
export interface IComponent {
  id: string;
  paths?: IImageDefinitionPath[] | null;
  componentType: number;
  position: IPosition;
  textFormat: string;
  defaultText: string;
  variants: string[];
  sets: ISet[];
}
