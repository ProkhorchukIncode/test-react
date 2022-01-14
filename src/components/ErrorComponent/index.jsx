import { Link} from "react-router-dom"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const ErrorComponent = ({errMassage}) => {
    return (
        <>
            <Box sx={{pt:5}}>
                <Typography style={{textAlign: 'center', fontSize: '25px'}} component='h2'>Sorry. We have error:</Typography>
                <Typography style={{textAlign: 'center', fontSize: '40px', color: 'red'}} >{errMassage}</Typography>
            </Box>
        </>
    )
}
export default ErrorComponent