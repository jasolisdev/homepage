import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Portfolio = () => (
  <Layout title="connect4">
    <br />
    <Container>
      <Title>
        Matrix Cli <Badge>2014</Badge>
      </Title>
      <P>
        First command line program I created after learning the basics of C++.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux, Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/jasolisdev/matrix_cli" target="_blank">
            https://github.com/jasolisdev/matrix_cli <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <PortfolioImage
        src="/images/portfolio/matrix-cli_01.png"
        alt="matrixcli" />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
