import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const data = await request.json();
	console.log(data);

	// Handle GET request
	return NextResponse.json({ message: 'Hello from the /app/cas route!' });
}

export async function POST(request: Request) {
	const data = await request.json();
	// Handle POST request
	return NextResponse.json({
		something: 'hi, im from https api',
		received: data,
	});
}
