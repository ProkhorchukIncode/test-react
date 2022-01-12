const DateOfBirth = ({dateOfBirth}) => {
    const formatingDateArray = dateOfBirth.split('-')
    const year = formatingDateArray[0]
    const mounth = formatingDateArray[1]
    const day = formatingDateArray[2].split('T')[0]
    return (
        <>
        {year}:{mounth}:{day}
        </>
    )
}
export default DateOfBirth