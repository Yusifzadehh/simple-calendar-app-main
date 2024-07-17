let leftarr = document.querySelector(".leftarr")
let rightarr = document.querySelector(".rightarr")
let month = document.querySelector(".month")
let calendarDate = document.querySelector(".calendarDate")
let date = new Date()

function getMonthName(number) {
    switch (number) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            break;
    }
}

fillCalendar()
nextMonth()
prevMonth()

function nextMonth() {
    date.setMonth(date.getMonth() + 1)
    month.innerHTML = `${getMonthName(date.getMonth())} ${date.getFullYear()}`
    fillCalendar()
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    month.innerHTML = `${getMonthName(date.getMonth())} ${date.getFullYear()}`
    fillCalendar()
}

leftarr.onclick = prevMonth
rightarr.onclick = nextMonth

function fillCalendar() {
    calendarDate.innerHTML = ``
    let currentMonth = date.getMonth()
    date.setMonth(currentMonth + 1)
    date.setDate(0)
    let lengthOfMonth = date.getDate()
    date.setMonth(currentMonth)
    date.setDate(1)
    let weekday = date.getDay()
    if (weekday == 0) {
        weekday = 7
    }
    for (let i = 1; i < weekday; i++) {
        let day = document.createElement("div")
        day.classList.add("day")
        calendarDate.appendChild(day)
    }
    for (let i = 1; i <= lengthOfMonth; i++) {
        let day = document.createElement("div")
        day.classList.add("day")
        day.innerHTML = i
        calendarDate.appendChild(day)
    }
}
