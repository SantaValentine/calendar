const generateButton = document.getElementById("generateButton");
const calendarTitle = document.getElementById("calendarTitle");
const calendarTable = document.getElementById("calendarTable");

generateButton.addEventListener("click", () => {

    const monthInput = parseInt(document.getElementById("monthInput").value, 10);
    const yearInput = parseInt(document.getElementById("yearInput").value, 10);


    if (isNaN(monthInput) || isNaN(yearInput) || monthInput < 1 || monthInput > 12) {
        alert("Введите корректные значения для месяца (1-12) и года.");
        return;
    }

    generateCalendar(monthInput, yearInput);
});

function generateCalendar(month, year) {
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];


    const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];


    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();


    const adjustedFirstDay = firstDay === 0 ? 7 : firstDay;


    calendarTitle.textContent = `${monthNames[month - 1]} ${year}`;
    calendarTable.innerHTML = "";


    const headerRow = document.createElement("tr");
    weekDays.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    });
    calendarTable.appendChild(headerRow);


    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 1; j <= 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < adjustedFirstDay) {
                cell.textContent = "";
            } else if (date > lastDate) {
                cell.textContent = "";
            } else {
                cell.textContent = date.toString();
                date++;
            }

            row.appendChild(cell);
        }

        calendarTable.appendChild(row);

        if (date > lastDate) break;
    }
}
