import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
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
  IoLogoTwitter,
  IoLogoInstagram,
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
      bg={useColorModeValue('whiteAlpha.500', '#3c3836')}
      color={useColorModeValue('#504945', '#bfb5a6')}
    >
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        color={useColorModeValue('#504945', '#bfb5a6')}
      >
        Hi, I&apos;m a full-stack developer based in Orange County, CA!
      </Box>
      <Box border="2px solid #A89984" padding="4" display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jose Solis
          </Heading>
          <p>( Developer / Designer )</p>
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
          experience with natural passion and excitement for technology. My
          specialty is in full website strategy, design and development. I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
          Currently, i'm working on developing my skills in React and making a
          connect4 game on the side called{' '}
          <NextLink href="/portfolio/connect4">
            <Link>Connect4</Link>
          </NextLink>
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
        <Heading as="h3" variant="section-title">
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
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={FaCopyright} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiCplusplus} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiCsharp} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiPython} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiJavascript} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoNodejs} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiLua} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiGnubash} />}
          ></Button>
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
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoHtml5} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoCss3} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoSass} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoReact} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoWordpress} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiWebflow} />}
          ></Button>
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
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={GrMysql} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiMariadb} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiPostgresql} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiMongodb} />}
          ></Button>
        </p>
        <Heading as="h3" variant="section-title" textAlign="center">
          Tools and Technologies
        </Heading>
        <p align="center">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoGitNetwork} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={FaLinux} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoTerminal} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiNeovim} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={SiVisualstudiocode} />}
          ></Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon w={7} h={7} as={IoLogoFigma} />}
          ></Button>
        </p>
        <Box align="center" my={4}>
          <NextLink href="/portfolio">
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
          <ListItem>
            <Link href="https://twitter.com/josexsolis" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @josexsolis
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/josexsolis" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @josexsolis
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
