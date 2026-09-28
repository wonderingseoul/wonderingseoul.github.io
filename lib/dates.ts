// 최신 날짜부터 정렬. 확인하지 못한 월/일은 추정하지 않고 같은 연도 끝에 표시합니다.
export function newestFirst<T extends { year?: string; sortDate?: string }>(a: T, b: T) {
  return (b.sortDate || b.year || "").localeCompare(a.sortDate || a.year || "");
}
