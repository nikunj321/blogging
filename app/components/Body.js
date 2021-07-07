import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Container from './Container'
import KeySpecs from './KeySpecs'
import MobileSpecs from './MobileSpecs'

function Body() {
    return (
        <Container>
            <Flex
                width="100%"
                gridGap="2"
                flexDirection={['column', 'row', 'row']}
                alignItems="flex-start"
                position='relative'
            >
                <Box minW="280px" bg="tomato" h="auto" d={['block', 'block', 'block']} position="sticky" top="0" >
                    <Image
                        // mx="auto"
                        // mt="10"
                        boxSize="max-content"
                        src="https://i.gadgets360cdn.com/products/large/galaxyM11-db-386x800-1585555981.jpg?downsize=*:180&output-quality=80"
                        alt="mobile picture"
                    />
                </Box>
                <Box flexBasis="100%">
                    <Flex width="100%" gridRowGap={2} >
                        <Box flexBasis="100%" h="auto" d={['block', 'block', 'block']} >
                            <KeySpecs />
                            <MobileSpecs />
                            <MobileSpecs />
                            <MobileSpecs />
                            <MobileSpecs />
                            <MobileSpecs />
                        </Box>
                        <Box width="400px" h="50vh" bg="green.500" d={['none', 'none', 'block']}></Box>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

export default Body
