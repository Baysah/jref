import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
/* const sql = neon(
  'postgres://baysahkorti:4OyVwNC7iFtm@ep-ancient-recipe-701031.us-east-1.aws.neon.tech/neondb'
); */
export async function helloWorld() {
  const start = new Date();
  const [dbResponse] = await sql`SELECT NOW();`;
  const dbNow = dbResponse && dbResponse.now ? dbResponse.now : '';
  const end = new Date();
  return { dbNow: dbNow, latency: end - start };
}
