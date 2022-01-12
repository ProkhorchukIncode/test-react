import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"

const CardUser = ({id, firstName, lastName, picture}) => {
    return(
        <Card>
            <Link to={{
                pathname: `${id}`,
            }}>
                <div>
                    <img src={picture} alt={lastName} />
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
            </Link>
        </Card>
    )
}
export default CardUser