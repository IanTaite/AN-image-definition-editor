import { IComponent } from './IComponent';
import { ITextDataSet } from './ITextDataSet';
import { IDefaultImage } from './IDefaultImage';
export interface IImageLayer {
  id: string;
  layerType: number;
  useTransformKeys: boolean;
  layerPosition: number;
  components: IComponent[];
  textDataSet: ITextDataSet | null;
  defaultImage: IDefaultImage | null;
  useVariants: boolean;
}
