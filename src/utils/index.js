export const dateFormat = (date) => {
    return new Date(date).getDate() + '/' + (new Date(date).getMonth()+1) + '/' + new Date(date).getFullYear();
};

export const dateTimeFormat = (date) => {
    date = new Date(date);
    let convert12HourFormat = (date) => {
        let hrs, mins, secs, time, meridien;
        hrs = date.getHours(); mins = date.getMinutes(); secs = date.getSeconds();
        meridien = (hrs < 12) ? "AM" : "PM";
        hrs %= 12;
        time = (hrs === 0) ? 12 : hrs;
        return ((time < 10) ? ('0'+time) : time) + ':' + ((mins < 10) ? ('0'+mins) : mins) + ':' + ((secs < 10) ? ('0'+secs) : secs) + ' ' + meridien;
    }

    return new Date(date).getDate() + '/' + (new Date(date).getMonth()+1) + '/' + new Date(date).getFullYear()  + ' ' 
    + convert12HourFormat(date);
};