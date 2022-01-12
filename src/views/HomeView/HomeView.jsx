import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {fetchAllUsers} from '../../redux/user-operations'
import { getAllUsers, getIsLoading } from "../../redux/user-selectors"

import LoaderComponent from "../../components/LoaderComponent"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import CardUser from "../../components/CardUser"

const HomeView = () => {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);
    const loading = useSelector(getIsLoading);
console.log(loading);
    useEffect(() => {
        dispatch(fetchAllUsers())
    },[dispatch])

    return (
        // <LoaderComponent/>
        <>
            {loading ? 
            (<LoaderComponent/>) 
            :
            (<Box sx={{pt:2}}>
                <Grid container component='ul' spacing={2}> 
                    {users?.map(({id, firstName, lastName, picture}) => {
                        return (
                            <Grid item component='li' key = {id} xs={2}>
                                <CardUser id={id} picture={picture} lastName={lastName} firstName={firstName} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>)
            }
        </>
    )
}
export default HomeView