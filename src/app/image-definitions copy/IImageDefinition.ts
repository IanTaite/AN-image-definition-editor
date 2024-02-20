import { IImageLayer } from './IImageLayer';

export interface IImageDefinition {
	id: string;
	name: string;
	clientId: string;
	imageSizeTemplateId: string;
	outputImageType: number;
	variantKeys: string[];
	imageLayers: IImageLayer[];
  etag: string | null;
}
