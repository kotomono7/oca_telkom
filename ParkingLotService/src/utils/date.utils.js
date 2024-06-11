const getCurrentDateTime = () => {
    let dateObj = new Date();

    let date = ("0" + dateObj.getDate()).slice(-2);
    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    let year = dateObj.getFullYear();
    let hours = dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();
    let minutes = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes();

    let currDateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes;

    return currDateTime;
};

const getCurrentDateTimeSecond = () => {
    let dateObj = new Date();

    let date = ("0" + dateObj.getDate()).slice(-2);
    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    let year = dateObj.getFullYear();
    let hours = dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();
    let minutes = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes();
    let seconds = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds();

    let currDateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    return currDateTime;
};

module.exports = { getCurrentDateTime, getCurrentDateTimeSecond };