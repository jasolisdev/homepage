import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PortfolioGridItem } from '../components/grid-item'

import thumbSaucywraps from '../public/images/portfolio/saucywraps_02.png'
import thumbSpaceShapes from '../public/images/portfolio/space-shapes_02.png'
import thumbSAO from '../public/images/portfolio/sfml-sao_01.png'
import thumbConnect4 from '../public/images/portfolio/connect4_01.png'
import thumbMatrixCLI from '../public/images/portfolio/matrix-cli_01.png'
import thumbSprinkles from '../public/images/portfolio/sprinkles-ice-cream_01.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container
      bg={useColorModeValue('whiteAlpha.500', '#3c3836')}
      color={useColorModeValue('#504945', '#bfb5a6')}
    >
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          <br />
          Portfolio
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <PortfolioGridItem
            id="saucywraps"
            title="Saucywraps"
            thumbnail={thumbSaucywraps}
          >
            A local car wrapping site done in webflow.
          </PortfolioGridItem>
        </Section>

        <Section delay={0.2}>
          <PortfolioGridItem
            id="spaceshapes"
            title="Space Shapes"
            thumbnail={thumbSpaceShapes}
          >
            Planatary Vector Simulation written in C++ using SFML.
          </PortfolioGridItem>
        </Section>

        <Section delay={0.3}>
          <PortfolioGridItem
            id="sao"
            title="Sword Art Online Shooter"
            thumbnail={thumbSAO}
          >
            Sword Art Online inspired shooter written in C++ using SFML.
          </PortfolioGridItem>
        </Section>

        <Section delay={0.4}>
          <PortfolioGridItem
            id="sprinkles"
            title="Whata Lotta Sprinkles"
            thumbnail={thumbSprinkles}
          >
            Fictional ice cream shop app written in C#.
          </PortfolioGridItem>
        </Section>

        <Section delay={0.5}>
          <PortfolioGridItem
            id="matrixcli"
            title="Matrix Cli"
            thumbnail={thumbMatrixCLI}
          >
            First command line program I created in C++.
          </PortfolioGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <PortfolioGridItem
            id="connect4"
            thumbnail={thumbConnect4}
            title="Connect4"
          >
            Collaborative C++ project using SFML for the Orange Coast College
            Programming Club.
          </PortfolioGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
