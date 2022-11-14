const workingHoursInYear = () => {
  // working hours in a year 1920
  // 240 work days in a year

  return 8 * 5 * 4 * 12;
};

const calculateYearFromHour = (hour) => {
  return hour * workingHoursInYear();
};

const calculateHourFromYear = (year) => {
  return year / workingHoursInYear();
};

const calculateDayEarnings = (hourRate, workDayHours = 8) => {
  return hourRate * workDayHours
}

console.log(calculateYearFromHour(100));
console.log(calculateHourFromYear(110000));
console.log(calculateHourFromYear(300000));
console.log(workingHoursInYear()/8);
console.log(calculateDayEarnings(57))
console.log(calculateDayEarnings(100))
