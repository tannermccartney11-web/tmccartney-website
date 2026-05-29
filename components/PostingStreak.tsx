/**
 * Calculate the current posting streak in days
 * Streak started on April 27, 2026
 * Uses UTC dates to avoid timezone issues
 */
export function getStreakCount(): number {
  // Streak start date: April 27, 2026 (UTC, midnight)
  const streakStart = new Date(Date.UTC(2026, 3, 27)); // Month is 0-indexed, so 3 = April

  // Get today's date at midnight UTC
  const today = new Date();
  const todayUTC = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );

  // Calculate difference in milliseconds
  const diffMs = todayUTC.getTime() - streakStart.getTime();

  // Convert to days and add 1 to count the start day as day 1
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays + 1;
}

/**
 * Optional: React component to display the streak count
 * Usage: <PostingStreak /> in your hero section
 */
export function PostingStreak() {
  return <span>{getStreakCount()}</span>;
}
