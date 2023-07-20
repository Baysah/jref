import isValidURL from "@/lib/isValidURL";
import { NextResponse } from "next/server";

export async function POST(request){
    const contentType = await request.headers.get('content-type');

    //check if content type is application/json
    if(contentType !== 'application/json'){
        return NextResponse.json({message: 'Invalid content type'}, {status: 415});
    }
    const data = await request.json();

    //check if url is valid
    const url = data && data.url ? data.url : null;
    const validURL = await isValidURL(url, [
      'ghws.xyz',
      process.env.NEXT_PUBLIC_VERCEL_URL,
    ]);
    if(!validURL){
        return NextResponse.json({message: `${url} is not a valid URL`}, {status: 400});
    }
    return NextResponse.json(data, {status: 201});
}