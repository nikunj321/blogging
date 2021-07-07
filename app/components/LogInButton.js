import React from 'react'
import { Button } from '@chakra-ui/react'

function LogInButton({ children, hover, ...rest }) {
    return (
        <Button
            fontSize="16px"
            px="1.3em"
            size="sm"
            // pt="2px"
            // pb="3px"
            height="2.2em"
            borderRadius="50px"
            variant="outline"
            boxSizing="border-box"
            mr=".5em"
            d={['none', 'block', 'block']}
            lineHeight="0px"
            {...rest}
        >
            {children}
        </Button>
    )
}

export default LogInButton
