import videos from "@/public/data/videos.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(videos);
}
