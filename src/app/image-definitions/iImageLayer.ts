import { IComponent } from './IComponent';
import { ITextDataSet } from './iTextDataSet';
import { IDefaultImage } from './iDefaultImage';
export interface IImageLayer {
	layerType: number;
	useTransformKeys: boolean;
	layerPosition: number;
	components: IComponent[];
	textDataSet: ITextDataSet | null;
	defaultImage: IDefaultImage | null;
	useVariants: boolean;
}

