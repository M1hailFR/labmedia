export interface IFieldsProps<T> {
  fields: T;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

export type ClassPropType = string | string[];

export enum SizesEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export type SizesType = `${SizesEnum}`;

export enum LinkTargetEnum {
  TARGET = '_target',
  SELF = '_self'
}

export type LinkTargetType = `${LinkTargetEnum}`;

export enum ColorsEnum {
  BRAND_1 = 'brand-1',
  BRAND_2 = 'brand-2',
  NEUTRALS_1 = 'neutrals-1',
  NEUTRALS_2 = 'neutrals-2',
  NEUTRALS_3 = 'neutrals-3',
  NEUTRALS_4 = 'neutrals-4',
  NEUTRALS_5 = 'neutrals-5',
  NEUTRALS_6 = 'neutrals-6',
  SURFACE_1 = 'surface-1',
  SURFACE_2 = 'surface-2',
  SURFACE_3 = 'surface-3',
  DANGER = 'danger'
}

export type ColorsType = `${ColorsEnum}`;

export enum SidesEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export type SidesType = `${SidesEnum}`;

export enum ElementVariantsEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type ElementVariantsTypes = `${ElementVariantsEnum}`;
