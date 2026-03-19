import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, this would save to DB/Supabase.
    // Requirement: "Storage in local JSON if no DB".
    // For now, we simulate success and log to console.
    
    console.log("New Lead Received:", body);
    
    return NextResponse.json({ success: true, message: "Lead saved" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
