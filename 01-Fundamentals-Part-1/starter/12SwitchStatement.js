
const day = 'friday'

switch(day) {
    case 'monday': // if day === 'monday' execute code below
        console.log('Plan course structure')
        console.log('Go to coding meetup')
        break
    case 'tuesday':
        console.log('Prepare Theory videos')
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Record videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break
    default:
        console.log('Not a valid day')
} 

// if-else for same case

if (day === 'monday'){
    console.log('Plan course structure')
    console.log('Go to coding meetup')
} else if (day === 'tuesday'){
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
}else if (day === 'friday') {
    console.log('Record videos')
}else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoi weekend')
}else {
    console.log('Not a valid day')
}

