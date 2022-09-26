const getCurrentDay = () => {
    const date = new Date();
    return date.getDate();
}

module.exports = getCurrentDay;