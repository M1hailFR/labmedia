import { type IPropsIcon } from '../types/propsTypes';
import { SidesEnum } from '@/core/types/components';

export default function (rotateSide: IPropsIcon['rotate']) {
  switch (rotateSide) {
    case SidesEnum.LEFT:
      return 90;
    case SidesEnum.RIGHT:
      return -90;
    case SidesEnum.TOP:
      return 180;
    case SidesEnum.BOTTOM:
    default:
      return 0;
  }
}
