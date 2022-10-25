import { Flex, Box } from "@chakra-ui/react";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Rentals"
        linkName="/search?purpose=for-rent"
        imageUrl="https://via.placeholder.com/500x300.png?text=Visit+reactrealtors.com+Now"
      />
      <Flex>{/* Fetch rental properties and map over them... */}</Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy, and Own"
        title2="Your Dream Home"
        desc1="Explore Condos, Villas, Homes"
        desc2="and more"
        buttonText="Explore Properties"
        linkName="/search?purpose=for-sale"
        imageUrl="https://via.placeholder.com/500x300.png?text=Visit+reactrealtors.com+Now"
      />
      <Flex>{/* Fetch properties for sale and map over them... */}</Flex>
    </Box>
  );
}
