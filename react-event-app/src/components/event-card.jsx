import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
   
  export default function EventCard(props) {
    const navigate = useNavigate();

    const viewEvent = async (id) => {
        navigate(`/view-event/${id}`)
    }
    const event = props.event;
    return (
      <Card className="mt-6 w-96 mx-8">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {event.title}
          </Typography>
          <Typography>
            {event.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 text-black">
          <Button onClick={() => viewEvent(event.eventID)}>Read More</Button>
        </CardFooter>
      </Card>
    );
  }