export interface apiQueryInterface {
  next?: string;
  prev?: string;
  count: number;
  page: number;
}

// function getQueryString(url: apiQueryInterface, uriKey: string): number {
//   const key = 'next';
//   if (url[key]) {
//     const nextUrl = new URLSearchParams(url[key]);
//     const params = Object.fromEntries(nextUrl.entries());
//     if (Object.values(params)) {
//       setNext(+Object.values(params)[0]);
//     }
//   }
// }

export function getQueryString(url: string): number {
  const parsedUrl = new URLSearchParams(url);
  const params = Object.fromEntries(parsedUrl.entries());
  if (Object.values(params)) {
    return +Object.values(params)[0];
  }
  return 0;
}
