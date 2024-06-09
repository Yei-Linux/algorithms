/**
 * Plan:
 *
 * 1. Sum and accumulate time in ms
 * 2. Convert ms in hour
 * 3. Diff between ms get and 7:00 in ms
 * 4. Format it
 *
 * @param {*} deliveries[]
 * @returns
 */
function calculateTime(deliveries) {
  const HRtoMs = (time) => time * 60 * 60 * 1000;
  const MMtoMs = (time) => time * 60 * 1000;
  const SStoMs = (time) => time * 1000;

  const sevenTimeInMs = HRtoMs(7);
  const deliveryTimeMs = deliveries.reduce((acc, delivery) => {
    const [hh, mm, ss] = delivery.split(':');
    return acc + HRtoMs(+hh) + MMtoMs(+mm) + SStoMs(+ss);
  }, 0);

  const havingMoreTime = sevenTimeInMs > deliveryTimeMs;
  let diffMs = Math.abs(sevenTimeInMs - +deliveryTimeMs);

  const hour = Math.floor(diffMs / (1000 * 60 * 60));
  diffMs = diffMs % (1000 * 60 * 60);
  const minutes = Math.floor(diffMs / (1000 * 60));
  diffMs = diffMs % (1000 * 60);
  const ss = Math.floor(diffMs / 1000);
  diffMs = diffMs % 1000;

  return (
    (!havingMoreTime ? '' : '-') +
    hour.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    ss.toString().padStart(2, '0')
  );
}

module.exports = {
  calculateTime,
};
