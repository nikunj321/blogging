import { Box, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"


const MobileSpecs = () => {
    return (
        <Box>
            <Table size="sm" variant="striped">
                {/* <TableCaption>General</TableCaption> */}
                <Thead position="sticky" top="0px">
                    <Tr>
                        <Th>General</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td borderRadius="5px">Brand</Td>
                        <Td>Samsung</Td>
                    </Tr>
                    <Tr>
                        <Td>Model</Td>
                        <Td>Galaxy M11</Td>
                    </Tr>
                    <Tr>
                        <Td>Price in India</Td>
                        <Td>₹9,499</Td>
                    </Tr>
                    <Tr>
                        <Td>Release date</Td>
                        <Td>30th march 2020</Td>
                    </Tr>
                    <Tr>
                        <Td>Launch in India</Td>
                        <Td>Yes</Td>
                    </Tr>
                    <Tr>
                        <Td>Form facotor</Td>
                        <Td>Touchscreen</Td>
                    </Tr>
                    <Tr>
                        <Td>Dimensions (mm)</Td>
                        <Td>161.40 x 76.30 x 9.00</Td>
                    </Tr>
                    <Tr>
                        <Td>removable battry</Td>
                        <Td>yes</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
};

export default MobileSpecs;