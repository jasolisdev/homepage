import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Portfolio = () => (
  <Layout title="connect4">
    <br />
    <Container>
      <Title>
        Connect4 <Badge>2019</Badge>
      </Title>
      <P>
        Collaborative C++ project using SFML for the Orange Coast College
        Programming Club. WIP
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux, Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML (Simple Fast Multimedia Library)</span>
        </ListItem>
      </List>

      <PortfolioImage src="/images/portfolio/connect4_01.png" alt="connect4" />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
