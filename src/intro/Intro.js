/* eslint-disable react/forbid-prop-types */
import { Heading, Stack, Button, IconButton, useToast } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section } from '../shared/flex'

const Wrapper = styled(Section)`
  background: url(${({ bg }) => bg}) #000;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  padding: 8rem 30% 0 3rem;

  @media only screen and (max-width: 800px) {
    padding: 8rem 2rem;

    h1 {
      font-size: 3.4rem;
    }
  }

  p {
    margin: 3rem 0;
  }
`

const Intro = ({ name, bio, dpUrl, social, email, mobile }) => {
  const toast = useToast()

  const handleContactClick = (type, info) => {
    navigator.clipboard.writeText(info)
    window.open(`${type}:${info}`, '_self')
    toast({
      title: `${info} has been copied to clipboard`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Wrapper bg={dpUrl}>
      <h3>Hi, I&apos;m</h3>
      <Heading as="h1" size="4xl">
        {name.firstName}
      </Heading>
      <Heading as="h1" size="4xl">
        {name.lastName}
      </Heading>
      <p>{bio}</p>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={4}>
          {social.map(({ name: siteName, url, icon: Icon }) => (
            <IconButton
              variant="outline"
              colorScheme="green"
              aria-label={siteName}
              icon={<Icon />}
              onClick={() => window.open(url, '_blank')}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button
            variant="outline"
            colorScheme="green"
            aria-label={`Email ${name}`}
            leftIcon={<EmailIcon />}
            onClick={() => handleContactClick('mailto', email)}
          >
            Email Me
          </Button>
          <Button
            variant="outline"
            colorScheme="green"
            aria-label={`Call ${name}`}
            leftIcon={<PhoneIcon />}
            onClick={() => handleContactClick('tel', mobile)}
          >
            Call Me
          </Button>
        </Stack>
      </Stack>
    </Wrapper>
  )
}

Intro.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  dpUrl: PropTypes.string.isRequired,
  social: PropTypes.array.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
}

export default Intro
