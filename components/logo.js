import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 10px;
  line-height: 20px;
  padding-left: 10px;
  padding-top: 20px;

  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImg = `/images/navbarLogo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <LogoBox>
        <Image priority src={logoImg} width={40} height={50} alt="logo" />
        <Text color={useColorModeValue('#18181b', '#d6d6d8')} ml={3}>
          Jose Solis
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
