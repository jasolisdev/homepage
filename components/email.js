import React, { useState } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { IoMail } from 'react-icons/io5'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Email() {
  const [copied, setCopied] = useState(false)
  const email = 'hello@josesolis.dev'

  return (
    <div>
      {copied ? (
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoMail} />}
        >
          hello@josesolis.dev Copied!
        </Button>
      ) : (
        <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoMail} />}
          >
            hello@josesolis.dev
          </Button>
        </CopyToClipboard>
      )}
    </div>
  )
}

export default Email
