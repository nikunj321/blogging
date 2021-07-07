import { Box, Flex, Image, Divider, Button } from '@chakra-ui/react'

const MobileCard = () => {
    return (
        <Box maxW="400px" bg="blue.300" pl={4}>
            <Flex gridGap={2}>
                <Box zIndex="3" position="relative">
                    <Image
                        position="relative"
                        bottom="25px"
                        // mx="auto"
                        // mt="10"

                        boxSize="max-content"
                        src="https://i.gadgets360cdn.com/products/large/galaxyM11-db-386x800-1585555981.jpg?downsize=*:180&output-quality=80"
                        alt="mobile picture"
                    />
                </Box>
                <Box>
                    <h1>Samsung Galaxy A11</h1>
                    <h2>2 GB Ram</h2>
                </Box>
            </Flex>
            <Divider orientation="horizontal" />
            <Button float="right" m="2 2 2 2" size="sm" bg="orange.200">Buy Now</Button>
        </Box>
    )
}

export default MobileCard;