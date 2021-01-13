import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const SmallScreenContainerText = () => (
  <Container text fluid textAlign="left">
    <Header as='h2'>Please maximize your screen or use a computer!</Header>
    <p>
      Unfortunately, I have not optimized this webpage for a mobile or tablet
      viewing experience. If you want to view the project, please try this link
      on a computer or a monitor, else, if you have any ideas, you can hit me up
      on LinkedIn to connect with me! Otherwise, thanks for viewing this project!
    </p>

  </Container>
)

export default SmallScreenContainerText