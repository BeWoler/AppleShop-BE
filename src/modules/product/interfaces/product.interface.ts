export interface IProduct {
  title: string;
  photos: Array<IProductPhotos>;
  price: string;
  description: string;
  colors: Array<string>;
  features: Array<IProductFeatures>;
}

export interface IProductPhotos {
  imgLink: string;
  imgColor: string;
  colorName: string;
}

export interface IProductFeatures {
  keys: Array<string>;
  values: Array<string>;
}
