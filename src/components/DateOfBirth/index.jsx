import dayjs from 'dayjs'


const DateOfBirth = ({dateOfBirth}) => {
    const date = dayjs(dateOfBirth).format('YYYY-MM-DD')

    return (
        <>
        {date}
        </>
    )
}
export default DateOfBirth