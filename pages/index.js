import { Flex, Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesForRent }) {
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
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
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
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
