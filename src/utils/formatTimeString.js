export const formatTimeString = (time) => {
  let msecs = time % 1000;

  if (msecs < 10) {
    msecs = `00${msecs}`;
  } else if (msecs < 100) {
    msecs = `0${msecs}`;
  }

  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(time / 60000);
  seconds = seconds - minutes * 60;
  let formatted = `${minutes < 10 ? 0 : ''}${minutes}:${
    seconds < 10 ? 0 : ''
  }${seconds}:${msecs}`;

  return formatted;
};
