import React from "react";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Star, TickSquare, TimeCircle } from "react-iconly";
const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: "10px",
    padding: "15px",
  },
  imageSection: {
    position: "relative",
  },
  price: {
    position: "absolute",
    bottom: -25,
    right: 0,
    margin: "10px",
  },
  content: {
    paddingTop: "20px",
    alignItems: "end",
    justifyContent: "space-between",
  },
}));
const checkIcon = <TickSquare />;
const clockIcon = <TimeCircle />;
function HotelCard({data}: {data: any }) {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" padding="0" mb={"lg"} radius="md" withBorder>
      <Card.Section className={classes.imageSection}>
        <Image
          src={data.image}
          height={160}
          alt="Norway"
        />
        <Group className={classes.price} position="apart" mt="md" mb="xs">
          <Badge color="green" p={"md"} variant="light">
            FROM {data.price}
          </Badge>
        </Group>
      </Card.Section>
      <Card.Section p={"md"} className={classes.content}>
        <div>
          <Text weight={500} size={"lg"}>
           {data.title}
          </Text>
          {/* <Text size="sm" color="dimmed">
          2 Hours Forest Therapy Session in Canada
          </Text> */}
          <Group spacing={"xs"}>
            <Badge
              mt={3}
              color="green"
              p={"md"}
              size="lg"
              variant="light"
             px={12}
            
            //   leftSection={checkIcon}
            >
              FREE CANCELLATION
            </Badge>
            <Badge
              mt={3}
              color="green"
              p={"md"}
              size="lg"
              variant="light"
              px={12}
             
              
            //   leftSection={clockIcon}
            >
              2 HRS
            </Badge>
          </Group>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px",marginTop:"5px" }}>
          <Star filled primaryColor="#fed141" size={18} />
          <Star filled primaryColor="#fed141" size={18} />
          <Star filled primaryColor="#fed141" size={18} />
          <Star filled primaryColor="#fed141" size={18} />
          <Star filled primaryColor="#fed141" size={18} />
        </div>
      </Card.Section>

      <Button variant="light" size="lg" color="green" fullWidth mt="md" radius="md">
        Discover now
      </Button>
    </Card>
  );
}

export default HotelCard;
