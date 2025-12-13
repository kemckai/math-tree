import { NextResponse } from 'next/server';
import { getAllFormulas } from '@/lib/content/formulas';

export async function GET() {
  try {
    const formulas = getAllFormulas();
    return NextResponse.json(formulas);
  } catch (error) {
    console.error('Error loading formulas:', error);
    return NextResponse.json({ error: 'Failed to load formulas' }, { status: 500 });
  }
}
