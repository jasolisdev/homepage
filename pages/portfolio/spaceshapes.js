import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Portfolio = () => (
  <Layout title="walknote">
    <br />
    <Container>
      <Title>
        Space Shapes <Badge>2019-2020</Badge>
      </Title>
      <P>
        Planitary Simulator that uses a config file to generate shapes and store
        in a vector using SFML.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux, Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML (Simmple Fast Multimedia Library)</span>
        </ListItem>
      </List>
      <PortfolioImage
        src="/images/portfolio/space-shapes_01.gif"
        alt="space-shapes"
      />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
