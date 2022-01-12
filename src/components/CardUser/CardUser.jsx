import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const CardUser = ({id, firstName, lastName, picture}) => {
    return(
        <Card>
            <Link to={{
                pathname: `${id}`,
            }}>
                <Box sx={{p: 2, pt: 2}}>
                    <Box sx={{mb: 2}} >
                        <Avatar src={picture} alt={lastName} 
                        style={{
                            width:'100px',
                            height:'100px',
                            marginLeft:'auto',
                            marginRight:'auto'
                        }}/>
                    </Box>
                    <Typography 
                        style={{textAlign:"center"}}>
                            {firstName}, {lastName}
                    </Typography>
                </Box>
            </Link>
        </Card>
    )
}
export default CardUser