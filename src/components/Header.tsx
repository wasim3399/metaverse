import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.webp'

export default function Header() {
  return (
    <>
        <Container>
          <SimpleGrid templateColumns={'repeat(3, 1fr)'}>
            <Box>
              <Image src={logo} alt='panaverse-logo'></Image>
            </Box>
            <Flex>
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Syllabus</Link>
              <Link href={'/'}>Explore</Link>
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Contact</Link>
            </Flex>
            <Box>
              <Button>Apply</Button>
            </Box>
          </SimpleGrid>
        </Container>
    </>
  )
}
