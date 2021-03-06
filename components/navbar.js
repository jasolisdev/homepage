import Logo from './logo'
import NextLink from 'next/link'
import {
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
import { IoLogoGithub } from 'react-icons/io5'
import { FaFilePdf } from "react-icons/fa";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#504945', '#bfb5a6')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
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
          <Heading height="40px" as="h1" size="lg" letterSpacing={'tighter'}>
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
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/jasolisdev/homepage"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box
            color={useColorModeValue('#504945', '#bfb5a6')}
            ml={2}
            display={{ base: 'inline-block', md: 'none' }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                color={useColorModeValue('#504945', '#bfb5a6')}
              />
              <MenuList
                bg={useColorModeValue('#bfb5a6', '#504945')}
              >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuDivider />
                <MenuItem
                  as={Link}
                  href="https://github.com/jasolisdev/homepage"
                  target="_blank"
                  style={{ gap: 4 }}
                >
                  <IoLogoGithub />
                  View Source
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="Resume.pdf"
                  target="_blank"
                  style={{ gap: 4 }}
                >
                  <FaFilePdf />
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
