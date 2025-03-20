import { isString } from '@/core/utils';

export const isExternalUrl = (link: string) => {
  if (!isString(link)) return false;
  let url;

  try {
    url = new URL(link);
  } catch (e) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};
