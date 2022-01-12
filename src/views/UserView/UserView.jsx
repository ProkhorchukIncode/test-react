import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link} from "react-router-dom"

import {fetchUser} from '../../redux/user-operations'
import { getUser } from "../../redux/user-selectors"

import { useParams } from "react-router-dom"

import DateOfBirth from "../../components/DateOfBirth/DateOfBirth"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"

import AccessibilityNew from "@material-ui/icons/AccessibilityNew"
import AlternateEmail from "@material-ui/icons/AlternateEmail"
import Cake from "@material-ui/icons/Cake"

const UserCard = () => {
    const dispatch = useDispatch();
    const {picture, firstName, lastName, email, dateOfBirth} = useSelector(getUser);
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchUser(id))
    },[dispatch])

    return (
        <Box sx={{pt:5}}>
            <Grid container spacing={2}>
                <Grid> 
                    <Box sx={{mr:10}}>
                        <Card>
                            <img src={picture} alt={lastName} 
                            style={{
                                width: '300px',
                                height:"300px",
                            }}/>
                        </Card>
                    </Box>
                </Grid>
                <Grid>
                    <Card>
                        <Box sx={{p:10}}>
                            <Typography style={{textAlign: 'center', fontSize: '25px'}} component='h2'>
                                Information
                            </Typography>
                            <Box sx={{pt:2}}>
                                <Typography sx={{mr:2}}>
                                    <AccessibilityNew style={{marginRight: '20px'}}/>
                                    {firstName} {lastName}
                                </Typography>
                                <Typography>
                                    <AlternateEmail style={{marginRight: '20px'}}/>
                                    {email}
                                </Typography>
                                <Cake style={{marginRight: '20px'}}/>
                                {dateOfBirth ? <>
                                    <DateOfBirth dateOfBirth={dateOfBirth}/>
                                </>
                                : <Typography>No date of birth</Typography>
                            }
                            </Box>
                        </Box>
                    </Card>
                    <Box sx={{mt:10}}>
                        <Link to='/users'>&#10094; To Home</Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default UserCard