export default function relativeDate(date: Date) {
  const delta = Math.round((+new Date() - +date) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  let fuzzy;

  if (delta < 30) {
    fuzzy = 'just then.';
  } else if (delta < minute) {
    fuzzy = delta + ' seconds ago.';
  } else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.';
  } else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
  } else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.';
  } else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
  } else if (delta < day * 2) {
    fuzzy = 'yesterday';
  }
  return fuzzy;
}
