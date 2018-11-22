import { parse } from 'url';
import routs from './routs';
import notFound404 from './notFound404';

function parsePath(urlString) {
  const urlObject = parse(urlString, true);
  const pathname = urlObject.pathname || '';
  return pathname.replace(/^\/+|\/+$/g, '');
}

export default function router(request, response) {
  const path = parsePath(request.url);
  const handle = routs[path] || notFound404;
  handle(request, response);
}
