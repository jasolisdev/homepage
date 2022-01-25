import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PortfolioGridItem } from '../components/grid-item'

import thumbSaucywraps from '../public/images/portfolio/saucywraps_02.png'
import thumbSpaceShapes from '../public/images/portfolio/space-shapes_02.png'
import thumbConnect4 from '../public/images/portfolio/connect4_01.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
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
      </SimpleGrid>
      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
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
