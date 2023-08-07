import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Dan"]

export const get: APIRoute = ({ params, request }) => {
  const id = params.id;
  return new Response( JSON.stringify({
    name: usernames[id]
  }),{status:200})
};

export function getStaticPaths () {
  return [
    { params: { id: "0"} },
    { params: { id: "1"} },
    { params: { id: "2"} },
  ]
}