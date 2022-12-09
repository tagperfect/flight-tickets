import { format } from 'date-fns';

/**
 * 
 * @param {Sring} str 
 * @param {String} type - 'yyyy.mm.dd' 
 * @returns 
 */
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}