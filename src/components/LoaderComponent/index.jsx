import {Watch} from "react-loader-spinner"

import Box from "@material-ui/core/Box"
 
const LoaderComponent =() => {
    return(
        <Box style={{position:'absolute', top: '50%', left: '50%', transform: 'translate(-50%)'}}>
            <Watch />
        </Box>
    )
}
export default LoaderComponent