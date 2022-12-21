export const resetDuration = 1000

export const gameEndedDuration = 1000

export const rows: Record<
  string,
  { cols: number; gap: string; aspectRatio: string }
> = {
  12: { cols: 4, gap: '4%', aspectRatio: '4/6' },
  24: { cols: 4, gap: '3%', aspectRatio: '4/5' },
  48: { cols: 6, gap: '2%', aspectRatio: '4/5' },
}
