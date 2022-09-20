$(document).ready(function () {
    taskDescArr = new Array(9);

    function getMomentNow() {
        const headerDateTime = moment().format('dddd [, ] MMMM Do');
        $('#currentDay').text(headerDateTime);

        let momentHour = moment().format('H');
        momentHour = Number(momentHour);
        return momentHour;
    }

    let $dailyContainer = $('dailyContainer');

    function createGridSystem() {
        for (var hourOfDay = 9; hourOfDay <= 17; hourOfDay++) {
            let hourIndex = hourOfDay - 9;
            let $rowContainer = $("<div></div>")
                .addClass('row')
                .addClass('nonBootstrapRow')
                .attr('hour-index', hourOfDay);

            var $columnHour = $("<div></div>")
                .addClass("col-md-2 hour time-block")

            let $columnHourSpan = $('<span></span>')
            let $columnHourly = "";

            switch (hourOfDay) {
                case 9: case 10: case 11:
                    columnHourly = hourOfDay + "AM";
                    break;
                case 12:
                    columnHourly = hourOfDay + "PM";
                    break;
                default:
                    columnHourly = (hourOfDay - 12) + "PM";
                    break;
            }

            $columnHour.text(columnHourly);

            let $description = $("<div></div>")
                .addClass("col-md-9");

            let $descriptionColumnSpan = $("<input></input>")
                .addClass('description taskDescriptionSpan')
                .attr('type', 'text')
                .attr('id', `input-${hourIndex}`)
                .attr('hour-index', hourIndex);

            $descriptionColumnSpan.val(taskDescArr[hourIndex]);

            let $saveButtonColumn = $("<div></div>")
                .addClass('col-md-1 saveBtn')

            let $saveBtnIcon = $("<i></i>")
                .addClass('fas fa-save btn-save')
                .attr('id', `saveid-${hourIndex}`)
                .attr('save-id', hourIndex);

            $rowContainer.append($columnHour);
            $rowContainer.append($descriptionColumn);
            $descriptionColumn.append($descriptionColumnSpan);
            $rowContainer.append($saveButtonColumn);
            $saveButtonColumn.append($saveBtnIcon);

            $dailyContainer.append($rowContainer);
        };
    };
})