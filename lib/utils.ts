import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleRoute = (route: string, params: any) => {
  Object.keys(params).forEach((key) => {
    route = route.replace(':id', params[key]);
  });

  return route;
};

export const truncate = (text: string, startChars: number, endChars: number, maxLength: number) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    return start + end;
  }
  return text;
};
