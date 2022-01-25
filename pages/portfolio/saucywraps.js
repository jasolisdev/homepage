import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Portfolio = () => (
  <Layout title="Saucywraps">
    <br />
    <Container>
      <Title>
        Saucywraps <Badge>2019-</Badge>
      </Title>
      <P>A car wrapping website.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://saucywraps.webflow.io/" target="_blank">
            https://saucywraps.webflow.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Created using Webflow</span>
        </ListItem>
      </List>
      <PortfolioImage
        src="/images/portfolio/saucywraps_01.png"
        alt="Saucywraps"
      />
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
