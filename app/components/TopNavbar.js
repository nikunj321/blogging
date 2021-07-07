import { Button, Flex, Input, Box, Spacer, Icon } from "@chakra-ui/react"
import { GoThreeBars } from 'react-icons/go'
import LogInButton from "./LogInButton"

const TopNavbar = () => {
    return (
        <Box py=".5em" bgColor="whiteAlpha.100">
            <Flex
                alignItems="center"
                gridGap={2}
            >
                <Box borderRadius="50%" ml="1" p=".6em">
                    <Icon as={GoThreeBars} mx="auto" w={6} h={6} />
                </Box>

                <Box
                    borderRadius="5px"
                    fontSize={["20px", "20px", "20px"]}
                    fontWeight="medium"
                // px="1em"
                // py=".4em"
                >
                    <h1>Mobile world</h1>
                </Box>
                <Input
                    // my=".5em"
                    placeholder="search..."
                    variant="outline"
                    size="sm"
                    maxW="300px"
                    d={['none', 'none', 'block']}
                    borderRadius="50px"
                    border="1px solid"
                    borderColor="gray.400"
                />
                {/* <Spacer /> */}
                <Box ml="auto">
                    <Flex >
                        <LogInButton>Log In</LogInButton>
                        <LogInButton
                            bgColor="blue.500"
                            color="white"
                        >
                            Sign Up
                        </LogInButton>
                    </Flex>
                </Box>
            </Flex>
        </Box >
    )
};

export default TopNavbar;