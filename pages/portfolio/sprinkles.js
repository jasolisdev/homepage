import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Portfolio = () => (
  <Layout title="sprinkles">
    <br />
    <Container>
      <Title>
        Whata Lotta Sprinkles Ice Cream Company <Badge>2017</Badge>
      </Title>
      <P>
        Fictional ice cream shop application written in C#.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/jasolisdev/icecream_shop/" target="_blank">
            https://github.com/jasolisdev/icecream_shop/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <PortfolioImage
        src="/images/portfolio/sprinkles-ice-cream_01.png"
        alt="sprinkles-ice-cream"
      />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
