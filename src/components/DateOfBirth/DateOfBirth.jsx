const DateOfBirth = ({dateOfBirth}) => {
    const formatingDateArray = dateOfBirth.split('-')
    const year = formatingDateArray[0]
    const mounth = formatingDateArray[1]
    const day = formatingDateArray[2].split('T')[0]
    return (
        <div>
            <span>{year}:</span>
            <span>{mounth}:</span>
            <span>{day}</span>
        </div>
    )
}
export default DateOfBirth