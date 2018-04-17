const monthList = [
  '',
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAI',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OKT',
  'NOV',
  'DES'
]

export const DateNames = ['Idag', 'Pågår', 'Senere', 'Slutt']

const category = ['Klær', 'Mat']

export const DateDay = date => {
  return date.split('/')[0]
}

export const DateMonth = date => {
  return monthList[date.split('/')[1].replace('0', '')]
}

export const Today = (startDate, endDate) => {
  var today = new Date()
  var currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )

  var startList = startDate.split('/')
  var endList = endDate.split('/')
  var eventStartDate = new Date(startList[2], startList[1] - 1, startList[0])
  var eventEndDate = new Date(endList[2], endList[1] - 1, endList[0])

  var now = currentDate.getTime()
  var start = eventStartDate.getTime()
  var end = eventEndDate.getTime()

  if (now == start) return 0
  if (now <= end && now >= start) return 1
  if (start > now) return 2
  if (start >= end && now > start) return 3
  if (now > end && now > start) return 3
}

export const Include = (startDate, endDate) => {
  return Today(startDate, endDate) != 3
}

export const Category = catId => category[catId]

export const Distance = (myLat, myLong, lat, long) => {
  var R = 6371 // Radius of the earth in km
  var dLat = deg2rad(myLat - lat) // deg2rad below
  var dLon = deg2rad(myLong - long)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(myLat)) *
      Math.cos(deg2rad(lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c // Distance in km

  return d.toFixed(1) //'Ca. ' + d.toFixed(1) + ' km'
}

const deg2rad = deg => {
  return deg * (Math.PI / 180)
}
