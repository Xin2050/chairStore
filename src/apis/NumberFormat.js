export const NumberFormatted = (number) => {
    if(isNaN(number)){
        return ''
    }
    let format = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' });
    return format.format(number)
}