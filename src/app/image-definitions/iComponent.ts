import { IImageDefinitionPath } from './iImageDefinitionPath';
import { IPosition } from './iPosition';
import { ISet } from './iSet';
export interface IComponent {
	paths?: IImageDefinitionPath[] | null;
	componentType: number;
	position: IPosition;
	textFormat: string;
	defaultText: string;
	variants: string[];
	sets: ISet[];
}

