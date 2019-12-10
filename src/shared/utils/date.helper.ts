export class DateHelper {
  public static getDates(startDate: Date, finishDate: Date) {
    const dateArray: Date[] = [];
    let currentDate: Date = startDate;

    while (currentDate <= finishDate) {
      dateArray.push(new Date(currentDate));
      const auxDate = new Date(currentDate);
      auxDate.setDate(currentDate.getDate() + 1);
      currentDate = auxDate;
    }

    return dateArray;
  }
}
