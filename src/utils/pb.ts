import PocketBase from 'pocketbase';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const pb = new PocketBase(backendUrl);
export default pb;
