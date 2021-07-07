import { Box } from "@chakra-ui/react"


const Container = ({ children }) => {
    return (
        <Box maxW="1300px" mx="auto">
            {children}
        </Box>
    )
}

export default Container;