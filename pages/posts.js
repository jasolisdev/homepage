import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbArchLinuxSetup from '../public/images/contents/blog-my-arch-linux-setup.png'

const Posts = () => (
  <Layout title="Posts">
    <Container
      bg={useColorModeValue('whiteAlpha.500', '#3c3836')}
      color={useColorModeValue('#504945', '#bfb5a6')}
    >
      <Heading as="h3" fontSize={20} mb={4}>
        <br />
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Arch Linux Setup"
            thumbnail={thumbArchLinuxSetup}
            href="https://www.reddit.com/r/unixporn/comments/m09kpy/i3gaps_gruvbox_sayian_rice/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
// export { getServerSideProps } from '../components/chakra'
