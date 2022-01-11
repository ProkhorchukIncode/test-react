import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link} from "react-router-dom"

import {fetchUser} from '../../redux/user-operations'
import { getUser } from "../../redux/user-selectors"

import { useParams } from "react-router-dom"

import DateOfBirth from "../../components/DateOfBirth/DateOfBirth"

const UserCard = () => {
    const dispatch = useDispatch();
    const {picture, firstName, lastName, email, dateOfBirth} = useSelector(getUser);
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchUser(id))
    },[dispatch])



    return <>
        <div>
            <img src={picture} alt={lastName}/>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            {dateOfBirth ? <>
                <DateOfBirth dateOfBirth={dateOfBirth}/>
            </>
            : <p>No date of birth</p>
        }
            <Link to='/users'>To Home</Link>
        </div>
    </>
}
export default UserCard