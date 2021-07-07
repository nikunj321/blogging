import { Box, Divider, Flex, Image, Button, Grid } from "@chakra-ui/react";
import Layout from "../components/Layout";
import MobileCard from "../components/MobileCard";

export default function Home() {
  return (
    <Layout >
      <Flex p={3} mt="30px" flexDirection={['column', 'row', 'row']}
        justifyContent="flex-start"
        flexWrap="wrap"

        gridGap={7}>
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
      </Flex>
    </Layout>
  )
}
