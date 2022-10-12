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

console.log(calculateYearFromHour(53));
console.log(calculateHourFromYear(109440));

console.log(workingHoursInYear()/8);