import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Icon,
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
// import { IoLogoGithub } from 'react-icons/io5'
import { FaFilePdf } from 'react-icons/fa'

// const LinkItem = ({ href, path, target, children, ...props }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('#d6d6d8', '#d6d6d8')
//   return (
//     <Link
//       as={NextLink}
//       href={href}
//       scroll={false}
//       p={2}
//       bg={active ? 'grassTeal' : undefined}
//       color={active ? '#18181b' : inactiveColor}
//       target={target}
//       {...props}
//     >
//       {children}
//     </Link>
//   )
// }

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  // const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem href="/portfolio" path={path}> */}
          {/*   Portfolio */}
          {/* </LinkItem> */}
          {/* <LinkItem href="/posts" path={path}> */}
          {/*   Posts */}
          {/* </LinkItem> */}
          {/* <LinkItem */}
          {/*   _target="_blank" */}
          {/*   href="https://github.com/jasolisdev/homepage" */}
          {/*   target="_blank" */}
          {/*   path={path} */}
          {/*   display="inline-flex" */}
          {/*   alignItems="center" */}
          {/*   style={{ gap: 4 }} */}
          {/*   pl={2} */}
          {/* > */}
          {/*   <Icon as={IoLogoGithub} /> */}
          {/*   Source */}
          {/* </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box
            // menu-bg={useColorModeValue('#ff00ff', '#00ffff')}
            ml={2}
            display={{ base: 'inline-block', md: 'none' }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue('white', '#18181b')}>
                <MenuItem
                  bg={useColorModeValue('whiteAlpha.800', '#18181b')}
                  as={MenuLink}
                  href="/"
                >
                  About
                </MenuItem>
                {/* <MenuItem as={MenuLink} href="/portfolio"> */}
                {/*   Portfolio */}
                {/* </MenuItem> */}
                {/* <MenuItem as={MenuLink} href="/posts"> */}
                {/*   Posts */}
                {/* </MenuItem> */}
                <MenuDivider></MenuDivider>
                {/* <MenuItem */}
                {/*   bg={useColorModeValue('whiteAlpha.800', '#18181b')} */}
                {/*   as={Link} */}
                {/*   href="https://github.com/jasolisdev/homepage" */}
                {/*   target="_blank" */}
                {/*   style={{ gap: 4 }} */}
                {/* > */}
                {/*   <Icon as={IoLogoGithub} /> */}
                {/*   View Source */}
                {/* </MenuItem> */}
                <MenuItem
                  bg={useColorModeValue('whiteAlpha.800', '#18181b')}
                  as={Link}
                  href="Resume.pdf"
                  target="_blank"
                  style={{ gap: 4 }}
                >
                  <Icon as={FaFilePdf} />
                  Resume
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
