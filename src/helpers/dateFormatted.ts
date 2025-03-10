function getMonthName(month: string) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const monthIndex = parseInt(month) - 1

  if (monthIndex >= 0 && monthIndex < months.length) {
    return months[monthIndex]
  }

  return ''
}

export default function dateFormatted(date: string) {
    if (!date) return ''

    const [year, month, day] = date.split('-')
    
    const monthName = getMonthName(month)

    if (year && monthName && day) {
        return `${monthName} ${day}, ${year}`
    }

    return ''
    
}