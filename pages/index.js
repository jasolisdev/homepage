import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  Tooltip,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Email from '../components/email'
import {
  IoLogoGithub,
  IoGitNetwork,
  IoTerminal,
  IoLogoFigma,
  IoLogoWordpress,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoReact,
  IoLogoNodejs
} from 'react-icons/io5'
import {
  SiNeovim,
  SiVisualstudiocode,
  SiMariadb,
  SiPostgresql,
  SiMongodb,
  SiWebflow,
  SiCplusplus,
  SiCsharp,
  SiPython,
  SiJavascript,
  SiLua,
  SiGnubash
} from 'react-icons/si'
import { FaLinux, FaCopyright } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'

const Home = () => (
  <Layout>
    <Container
      padding="4"
      bg={useColorModeValue('whiteAlpha.100', '#18181b')}
      color={useColorModeValue('#504945', '#d6d6d8')}
    >
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        color={useColorModeValue('#504945', '#d6d6d8')}
      >
        Hi, I&apos;m a full-stack developer based in Los Angeles, CA!
      </Box>
      <Box border="2px solid #18181b" padding="4" display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jose Solis
          </Heading>
          <p>( Software Engineer / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="#A89984"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="/images/jose.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Resourceful and creative IT professional passionate about interactive
          media and aspiring to make an impact by combining technical skill and
          experience with natural passion and excitement for technology. I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
          Currently, I'm working on developing my skills in React and making a
          connect4 game on the side called{' '}
          <Link
            as={NextLink}
            href="/portfolio/connect4"
            passHref
            scroll={false}
          >
            Connect4
          </Link>
          .
        </Paragraph>
        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={16}
        >
          Why work with me?
        </Heading>
        <Paragraph>
          I'm a well-organised person, problem solver and an independent
          employee with high attention to detail. I love working with people and
          there is nothing more enjoyable than to design and develop great
          looking websites for nice people. It's that simple.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="Resume.pdf" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Resume
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading mb={7} as="h3" variant="section-title">
          Professional Skills
        </Heading>
        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={15}
        >
          Programming/Scripting Languages
        </Heading>
        <p align="center">
          <Tooltip label="C">
            <span>
              <Icon
                w={7}
                h={7}
                as={FaCopyright}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="C++">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiCplusplus}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="C#">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiCsharp}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Python">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiPython}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Javascript">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiJavascript}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Nodejs">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoNodejs}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Lua">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiLua}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Bash">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiGnubash}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
        </p>
        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={15}
        >
          Web Development
        </Heading>
        <p align="center">
          <Tooltip label="HTML5">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoHtml5}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="CSS3">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoCss3}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="SASS">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoSass}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="React">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoReact}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Wordpress">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoWordpress}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Webflow">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiWebflow}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
        </p>
        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={15}
        >
          Database
        </Heading>
        <p align="center">
          <Tooltip label="Mysql">
            <span>
              <Icon
                w={7}
                h={7}
                as={GrMysql}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="MariaDB">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiMariadb}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Postgresql">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiPostgresql}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="MonogoDB">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiMongodb}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
        </p>
        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={15}
        >
          Tools and Technologies
        </Heading>
        <p align="center">
          <Tooltip label="Git">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoGitNetwork}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Linux">
            <span>
              <Icon
                w={7}
                h={7}
                as={FaLinux}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Terminal">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoTerminal}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Neovim">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiNeovim}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="VSCode">
            <span>
              <Icon
                w={7}
                h={7}
                as={SiVisualstudiocode}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
          <Tooltip label="Figma">
            <span>
              <Icon
                w={7}
                h={7}
                as={IoLogoFigma}
                variant="ghost"
                color="#7fbbb3"
                mt={3}
                mr={3}
                ml={3}
              ></Icon>
            </span>
          </Tooltip>
        </p>
        <br />
        <Box align="center" my={4}>
          <NextLink href="/portfolio" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in touch
        </Heading>
        <List>
          <ListItem>
            <Email />
          </ListItem>
          <ListItem>
            <Link href="https://github.com/jasolisdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @jasolidev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
