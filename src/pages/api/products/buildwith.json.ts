import type { APIRoute } from 'astro';

export const get:APIRoute = ({params, request}) => {
    return new Response(JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
      }),{status: 200})
  }