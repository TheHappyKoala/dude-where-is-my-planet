interface Query {
  url: string;
  body: string;
  units: string;
  center: string;
  start: string;
  stop: string;
  step: string;
}

export default ({
  url,
  body,
  units,
  center,
  start,
  stop,
  step
}: Query): string => {
  return [
    `${url}`,
    `&COMMAND='${body}'`,
    `&OUT_UNITS='${units}'`,
    `&CENTER=${center}`,
    `&MAKE_EPHEM='YES'`,
    `&TABLE_TYPE='VECTORS'`,
    `&START_TIME='${start}'`,
    `&STOP_TIME='${stop}'`,
    `&STEP_SIZE='${step}'`,
    `&QUANTITIES='1,9,20,23,24'&CSV_FORMAT='YES'`
  ].join('');
};
