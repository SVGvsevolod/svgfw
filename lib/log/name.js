/**
 * Generates names for dir as date and file as time
 * @returns {string[]}
 */
export default function name() {
    let a = new Date
    return Object.create(null, {
        0: {
            value: a.getUTCFullYear() + ' '
                 + (a.getUTCMonth() + 1).toString().padStart(2, '0') + ' '
                 + a.getUTCDate().toString().padStart(2, '0')
        },
        1: {
            value: a.getUTCHours().toString().padStart(2, '0') + ' '
                 + a.getUTCMinutes().toString().padStart(2, '0') + ' '
                 + a.getUTCSeconds().toString().padStart(2, '0') + ' '
                 + a.getUTCMilliseconds().toString().padStart(3, '0')
        }
    })
}