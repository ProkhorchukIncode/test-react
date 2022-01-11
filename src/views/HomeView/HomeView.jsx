import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link} from "react-router-dom"

import {fetchAllUsers} from '../../redux/user-operations'
import { getAllUsers } from "../../redux/user-selectors"

const HomeView = () => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])

    return (
    <ul>
        {users?.map(({id, firstName, lastName, picture}) => {
            return <li key = {id}>
                <Link to={{
                        pathname: `${id}`,
                    }}>
                    <div>
                        <img src={picture} alt={lastName} />
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                </Link>
            </li>
        })}
    </ul>)
}
export default HomeView