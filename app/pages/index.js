import { Box, Divider, Flex, Image, Button, Grid } from "@chakra-ui/react";
import Layout from "../components/Layout";
import MobileCard from "../components/MobileCard";
import MobileSpecs from "../components/MobileSpecs";
import KeySpecs from "../components/KeySpecs"
import Body from '../components/Body'

export default function Home() {
  return (
    <Layout >
      {/* <Body /> */}
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
