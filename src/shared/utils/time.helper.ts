export class TimeHelper {
  public static getTimes(startTime: string, finishTime: string) {
    const times: string[] = [];
    let currentTime: string = startTime;

    while (
      Number(currentTime.replace(':', '')) <=
      Number(finishTime.replace(':', ''))
    ) {
      times.push(currentTime);
      const splitTime = currentTime.split(':');
      if (splitTime[1] === '00') {
        currentTime = `${splitTime[0]}:30`;
      } else {
        let hour: number | string = Number(splitTime[0]) + 1;
        if (hour.toString().length < 2) {
          hour = `0${hour}`;
        }
        currentTime = `${hour}:00`;
      }
    }
    return times;
  }
}
