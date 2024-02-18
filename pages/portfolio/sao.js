import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Portfolio = () => (
  <Layout title="sao">
    <br />
    <Container>
      <Title>
        Sword Art Online Shooter <Badge>2014</Badge>
      </Title>
      <P>Sword Art Online inspired shooter written in C++ using SFML.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux, Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML (Simple Fast Multimedia Library)</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/jasolisdev/sfml_sao" target="_blank">
            https://github.com/jasolisdev/sfml_sao <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <PortfolioImage src="/images/portfolio/sfml-sao_02.gif" alt="sfml-sao" />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
