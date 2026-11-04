import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSecondsToTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export function calculatePercentile(scorePercent: number): number {
  if (scorePercent >= 90) return 96.5;
  if (scorePercent >= 80) return 89.2;
  if (scorePercent >= 70) return 78.4;
  if (scorePercent >= 60) return 64.0;
  if (scorePercent >= 50) return 48.5;
  return 32.0;
}
