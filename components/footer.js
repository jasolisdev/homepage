import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <br />
      <p>Simple Solutions for Complex Problems</p>
      <p>&copy; {new Date().getFullYear()} Jose Solis</p>
    </Box>
  )
}

export default Footer
