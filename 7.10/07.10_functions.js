function allCapsTitleTrimmed(title) {
    var string = title.toUpperCase();
    string = string.trim();
    document.getElementById("title").value = string;

}

function isSunday(date) {

    var split = date.split(".");

    var year = split[2];
    var month = split[1] - 1;
    var day = split[0];

    var checkdate = new Date(year, month, day);
    var help = checkdate.getDay();

    return help;

}