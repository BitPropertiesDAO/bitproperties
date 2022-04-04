import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// type Address = {
//     streetAddress: string,
//     city: string,
//     state: string,
//     zipCode: number,
// }

interface Props {
    address?: string,
    navigateLink?: string
    // DAOAddress: Address,
}

const defaultProps: Props = {
  address: 'MockAddr',
  navigateLink: '/DAO/invalid'
}

const DAOCard: React.FC<Props> = ({
  address = 'MockAddr',
  navigateLink = '/DAO/invalid'
}) => {

    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <a>DAO: {address}</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum DAO Description
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </>
    )
}

DAOCard.defaultProps = defaultProps

export default DAOCard