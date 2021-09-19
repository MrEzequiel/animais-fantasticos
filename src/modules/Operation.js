export const Operation = {
  init() {
    const operation = document.querySelector('[data-week]')
    const daysWeek = operation.dataset.week.split(',').map(Number)
    const hourlyWeek = operation.dataset.hourly.split(',').map(Number)

    const dateNow = new Date()
    const dayNow = dateNow.getDay()
    const hourlyNow = dateNow.getHours()

    const isWeekOpen = daysWeek.indexOf(dayNow) !== -1
    const isHourlyOpen = hourlyNow => hourlyWeek[0] && hourlyNow < hourlyWeek[1]

    isWeekOpen && isHourlyOpen
      ? operation.classList.add('open')
      : operation.classList.remove('open')
  }
}
