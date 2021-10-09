class Operation {
  constructor(operation) {
    this.operation = document.querySelector(operation)
  }

  operatingData() {
    this.daysWeek = this.operation.dataset.week.split(',').map(Number)
    this.hourlyWeek = this.operation.dataset.hourly.split(',').map(Number)
  }

  dataNow() {
    this.dateNow = new Date()
    this.dayNow = this.dateNow.getDay()
    this.hourNow = this.dateNow.getUTCHours() - 3
  }

  isOpen() {
    const isWeekOpen = this.daysWeek.indexOf(this.dayNow) !== -1
    const isHourlyOpen =
      this.hourNow >= this.hourlyWeek[0] && this.hourNow < this.hourlyWeek[1]

    return isWeekOpen && isHourlyOpen
  }

  init() {
    this.operatingData()
    this.dataNow()

    if (this.isOpen()) {
      this.operation.classList.add('open')
    } else {
      this.operation.classList.remove('open')
    }
    return this
  }
}

export default Operation
