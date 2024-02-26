// import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  // Tooltip,
  List,
  ListItem,
  // Icon,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Email from '../components/email'
import {} from // IoLogoGithub
// IoGitNetwork,
// IoTerminal,
// IoLogoFigma,
// IoLogoWordpress,
// IoLogoHtml5,
// IoLogoCss3,
// IoLogoSass,
// IoLogoReact,
// IoLogoNodejs
'react-icons/io5'
// import {
//   SiNeovim,
//   SiVisualstudiocode,
//   SiMariadb,
//   SiPostgresql,
//   SiMongodb,
//   SiWebflow,
//   SiCplusplus,
//   SiCsharp,
//   SiPython,
//   SiJavascript,
//   SiLua,
//   SiGnubash
// } from 'react-icons/si'
// import { FaLinux, FaCopyright } from 'react-icons/fa'
// import { GrMysql } from 'react-icons/gr'
import Heart from '../components/heart'

const Home = () => (
  <Layout>
    <Container
      padding="2"
      bg={useColorModeValue('whiteAlpha.100', '#18181b')}
      color={useColorModeValue('#504945', '#d6d6d8')}
    >
      <Flex mt={2} mb={2} p={3} justifyContent="center" alignItems="center">
        <svg
          id="line"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 497 111"
          width="300"
          height="100"
        >
          <defs>
            <style>
              {`
                .cls-1 {
                  fill: none;
                  stroke: #00ff00;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                }
              `}
            </style>
          </defs>
          <path
            className="cls-1"
            d="M52.5,176.5l5.21-6.94a1.07,1.07,0,0,1,1.66-.07l5.75,6.57a1.26,1.26,0,0,0,1,.44H77.44a2.19,2.19,0,0,0,2.19-2.06L84.5,95.5l4.82,104.12a.45.45,0,0,0,.89.06l4.22-22.81a.45.45,0,0,1,.44-.37h22.91A1.87,1.87,0,0,0,119,176l14.32-13.43a1.27,1.27,0,0,1,2,.28l7.79,13a1.37,1.37,0,0,0,1.18.67h39.56a1.35,1.35,0,0,0,1.06-.53l5.27-7a.44.44,0,0,1,.69,0l6.28,7.17a1.21,1.21,0,0,0,.91.41h12a.45.45,0,0,0,.45-.42l5-79.58,4.82,102.25a.45.45,0,0,0,.89.06l4.22-21.95a.44.44,0,0,1,.44-.36H289.5c2,0,28,2,18,10-5,4-27.35-18.65-36-43v0c-7-26,24-33,42-4,20,30-5,40,2,3a.22.22,0,0,0,0-.08c.05-11.59,20.5-50.58,36.27-28.5a29.89,29.89,0,0,1,5.15,21c-4.29,34.9-30.91,58.91-36.42,63.5-6,5-12-5,0-15,11.5-9.58,37.68-17.33,49.53-15.32,1.21.2,2.41.39,3.62.51,12.47,1.21,29.16,4.84,36.2,9.37a.45.45,0,0,0,.7-.34L415.5,98.5l6,106,4.81-25a1.23,1.23,0,0,1,1.21-1H447a4,4,0,0,0,2.69-1l15.06-13.39a2,2,0,0,1,3,.47l7.08,11.8a2.37,2.37,0,0,0,2,1.14h37.8a1.63,1.63,0,0,0,1.35-.72l4.79-7.18a1,1,0,0,1,1.61-.11l7,7.86a.41.41,0,0,0,.33.15h11.62a1.24,1.24,0,0,0,1.25-1.17L547.5,98.5"
            transform="translate(-51.5 -94.5)"
          />
        </svg>
      </Flex>

      <Box
        borderRadius="lg"
        mb={7}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        color={useColorModeValue('#504945', '#d6d6d8')}
      >
        Hello, I'm a freelance developer based in Los Angeles, CA!
      </Box>

      <Box padding="4" display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jose Solis
          </Heading>
          <p>( Certified EKG Monitor Technician 🫀 / Software Engineer 🤓 )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 8, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="#404040"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="190px"
            display="inline-block"
            borderRadius="50%"
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
          Dedicated and resourceful IT professional in transition to the medical
          field, with a passionate focus on becoming an EKG Monitor Technician.
          Motivated by a profound dedication to healthcare, I am enthusiastic
          about harnessing my technical proficiency to make a significant impact
          on patient well-being. With a solid foundation in technology and a
          newfound enthusiasm for healthcare, I bring a unique blend of
          analytical thinking and compassion to my work. My journey into the
          medical field is fueled by a desire to make a tangible difference in
          people's lives, particularly in critical care settings where accurate
          monitoring and timely intervention can be life-saving.
        </Paragraph>

        <Section delay={0.2}>
          <Flex mt={6} mb={6} p={3} justifyContent="center" alignItems="center">
            <Box>
              <Heart></Heart>
            </Box>
          </Flex>
        </Section>

        <Heading
          as="h3"
          variant="section-title"
          textAlign="center"
          fontSize={16}
        >
          Why work with me?
        </Heading>
        <Paragraph>
          I thrive in dynamic environments where problem-solving is key, and I
          excel as an independent thinker with a meticulous attention to detail.
          Whether it's troubleshooting technical issues or interpreting complex
          medical data, I approach challenges with determination and creativity.
          My ability to adapt quickly to new situations and my unwavering
          commitment to excellence make me a valuable asset to any team.
          <br></br>
          <br></br>
          As I transition into the medical field, my passion for technology
          seamlessly aligns with my dedication to providing quality patient
          monitoring and care. I am excited about the prospect of collaborating
          with like-minded professionals to design and develop innovative
          solutions that improve healthcare outcomes and enhance patient
          experiences.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="Resume.pdf" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Resume
            </Button>
          </Link>
        </Box>
      </Section>
      {/* <Section delay={0.2}> */}
      {/*   <Heading mb={7} as="h3" variant="section-title"> */}
      {/*     Professional Skills */}
      {/*   </Heading> */}
      {/*   <Heading */}
      {/*     as="h3" */}
      {/*     variant="section-title" */}
      {/*     textAlign="center" */}
      {/*     fontSize={15} */}
      {/*   > */}
      {/*     Programming/Scripting Languages */}
      {/*   </Heading> */}
      {/*   <p align="center"> */}
      {/*     <Tooltip label="C"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={FaCopyright} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="C++"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiCplusplus} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="C#"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiCsharp} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Python"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiPython} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Javascript"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiJavascript} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Nodejs"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoNodejs} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Lua"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiLua} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Bash"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiGnubash} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*   </p> */}
      {/*   <Heading */}
      {/*     as="h3" */}
      {/*     variant="section-title" */}
      {/*     textAlign="center" */}
      {/*     fontSize={15} */}
      {/*   > */}
      {/*     Web Development */}
      {/*   </Heading> */}
      {/*   <p align="center"> */}
      {/*     <Tooltip label="HTML5"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoHtml5} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="CSS3"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoCss3} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="SASS"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoSass} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="React"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoReact} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Wordpress"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoWordpress} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Webflow"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiWebflow} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*   </p> */}
      {/*   <Heading */}
      {/*     as="h3" */}
      {/*     variant="section-title" */}
      {/*     textAlign="center" */}
      {/*     fontSize={15} */}
      {/*   > */}
      {/*     Database */}
      {/*   </Heading> */}
      {/*   <p align="center"> */}
      {/*     <Tooltip label="Mysql"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={GrMysql} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="MariaDB"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiMariadb} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Postgresql"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiPostgresql} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="MonogoDB"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiMongodb} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*   </p> */}
      {/*   <Heading */}
      {/*     as="h3" */}
      {/*     variant="section-title" */}
      {/*     textAlign="center" */}
      {/*     fontSize={15} */}
      {/*   > */}
      {/*     Tools and Technologies */}
      {/*   </Heading> */}
      {/*   <p align="center"> */}
      {/*     <Tooltip label="Git"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoGitNetwork} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Linux"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={FaLinux} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Terminal"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoTerminal} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Neovim"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiNeovim} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="VSCode"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={SiVisualstudiocode} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*     <Tooltip label="Figma"> */}
      {/*       <span> */}
      {/*         <Icon */}
      {/*           w={7} */}
      {/*           h={7} */}
      {/*           as={IoLogoFigma} */}
      {/*           variant="ghost" */}
      {/*           color="#7fbbb3" */}
      {/*           mt={3} */}
      {/*           mr={3} */}
      {/*           ml={3} */}
      {/*         ></Icon> */}
      {/*       </span> */}
      {/*     </Tooltip> */}
      {/*   </p> */}
      {/*   <br /> */}
      {/*   <Box align="center" my={4}> */}
      {/*     <NextLink href="/portfolio" legacyBehavior> */}
      {/*       <Button rightIcon={<ChevronRightIcon />} colorScheme="teal"> */}
      {/*         Portfolio */}
      {/*       </Button> */}
      {/*     </NextLink> */}
      {/*   </Box> */}
      {/* </Section> */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in touch
        </Heading>
        <List>
          <ListItem>
            <Email />
          </ListItem>
          {/* <ListItem> */}
          {/*   <Link href="https://github.com/jasolisdev" target="_blank"> */}
          {/*     <Button */}
          {/*       variant="ghost" */}
          {/*       colorScheme="teal" */}
          {/*       leftIcon={<Icon as={IoLogoGithub} />} */}
          {/*     > */}
          {/*       @jasolidev */}
          {/*     </Button> */}
          {/*   </Link> */}
          {/* </ListItem> */}
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getServerSideProps } from '../components/chakra'
