import React from 'react'
import { Container, Text, Content } from 'native-base'

class Setting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Setting's Page</Text>
        </Content>
      </Container>
    )
  }
}

export default Setting