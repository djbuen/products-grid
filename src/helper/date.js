const intervals = [
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 0 }
]; //generate time intervals

function timeSince(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000); //get seconds from given date
  const interval = intervals.find(i => i.seconds < seconds); //lookup seconds from intervals to which bracket it belongs
  const count = Math.floor(seconds / interval.seconds); // count how many y/m/d/h/m/s from given date
  if(count > 7){
    return `${date}`;
  }
  return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
}

export { timeSince };
