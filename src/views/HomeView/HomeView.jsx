import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link} from "react-router-dom"

import {fetchAllUsers} from '../../redux/user-operations'
import { getAllUsers } from "../../redux/user-selectors"


import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const HomeView = () => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])

    return (
    <Grid container  component='ul' > 
        {users?.map(({id, firstName, lastName, picture}) => {
            return (
                <Box component='li' sx={{ 
                    width: 300,
                    paddingTop: 2
                 }} key = {id}>
                        <Link to={{
                                pathname: `${id}`,
                            }}>
                            <div>
                                <img src={picture} alt={lastName} />
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                            </div>
                        </Link>
                </Box>
            )
        })}
    </Grid>)
}
export default HomeView