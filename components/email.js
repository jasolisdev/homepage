import React, { useState } from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { IoMail } from 'react-icons/io5'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Email() {
  const [copied, setCopied] = useState(false)
  const email = 'jasolisdev@gmail.com'

  return (
    <div>
      {copied ? (
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoMail} />}
        >
          jasolisdev@gmail.com&nbsp;&nbsp;Copied!
        </Button>
      ) : (
        <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoMail} />}
          >
            jasolisdev@gmail.com
          </Button>
        </CopyToClipboard>
      )}
    </div>
  )
}

export default Email
