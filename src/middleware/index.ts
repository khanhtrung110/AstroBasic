import { sequence } from "astro/middleware";
const listUse = ['/about']
export async function auth({url} , next) {
   if (listUse.includes(url.pathname)) {
    const getUser = (id) => {
        return {
            name: "Trung",
        }
    }
	const user = getUser(123);
	if (!user) {
		return new Response(null, {status: 405});
	}
   }
	return await next();
}


async function getTitle({locals}, next) {
    // call API
    const user = {
        name: "Siuuu"
    }
	locals.user = user.name;
    return await next();;
}

export const onRequest = sequence(auth, getTitle);

