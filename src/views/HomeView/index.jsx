import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {fetchListUsers } from '../../redux/users/userListSlice'

import LoaderComponent from "../../components/LoaderComponent"
import CardUser from "../../components/CardUser"
import ErrorComponent from "../../components/ErrorComponent"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const HomeView = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userList.entities?.data);
    const loading = useSelector((state) => state.userList.loading);
    const errMassage = useSelector((state) => state.userList.error);

    useEffect(() => {
        if(!users){
            dispatch(fetchListUsers())
        }
    },[dispatch])

    return (
        <>
            {loading === 'pending' ? 
            (<LoaderComponent/>) 
            :
            (<>
                {errMassage  ? 
                (<ErrorComponent errMassage={errMassage}/>) 
                :
                (
                <Box sx={{pt:2}}>
                    <Grid container component='ul' spacing={2}> 
                        {users?.map(({id, firstName, lastName, picture}) => {
                            return (
                                <Grid item component='li' key = {id} xs={2}>
                                    <CardUser id={id} picture={picture} lastName={lastName} firstName={firstName} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                )
                } 
            </>
            )
            } 
        </>
    )
}
export default HomeView
