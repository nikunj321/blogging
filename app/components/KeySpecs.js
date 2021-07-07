import { Box, Flex, Grid, Icon } from "@chakra-ui/react"
import { BsDisplay } from 'react-icons/bs';
import { HiChip } from 'react-icons/hi';
import { GrCamera } from 'react-icons/gr';
import { CgSmartphoneRam } from 'react-icons/cg';
import { BiMemoryCard } from 'react-icons/bi';
import { FaBatteryThreeQuarters } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io';

const Display = ({ icon, name, details }) => {
    return (
        // <Box>
        <Flex gridGap={2} p={2} alignItems="center" >
            <Icon as={icon} boxSize="30px" />
            <Box>
                <h2>{name}</h2>
                <h1>{details}</h1>
            </Box>
        </Flex>
        // </Box>
    )
}


const KeySpecs = () => {
    return (
        <Box bg="#efebf1" borderRadius="10px" >
            <Grid templateColumns="repeat(3,1fr)" gap={2}>
                <Display icon={BsDisplay} name="Display" details="6.40-inch (720x1560)" />
                <Display icon={HiChip} name="processor" details="Qualcomm Snapdragon 450" />
                <Display icon={GrCamera} name="front camera" details="12 MP" />
                <Display icon={GrCamera} name="Rear camera" details="12 MP + 5 Mp + 3 MP" />
                <Display icon={CgSmartphoneRam} name="RAM" details="6 GB" />
                <Display icon={BiMemoryCard} name="Storage" details="32 GB" />
                <Display icon={FaBatteryThreeQuarters} name="Battery" details="5000mAh" />
                <Display icon={IoIosGlobe} name="OS" details="Android" />
            </Grid>
        </Box>
    )
}


export default KeySpecs;