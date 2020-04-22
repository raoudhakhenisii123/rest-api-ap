import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editContact } from './actions/actions'

const ContactItem = props => {
  return (
    <Card className="text-center">
      <Card.Header>{props.info.name}</Card.Header>
      <Card.Body>
        <Card.Title>Email</Card.Title>
        <Card.Text>
          {props.info.email}
        </Card.Text>
        <Card.Title>Phone</Card.Title>
        <Card.Text>
          {props.info.phone}
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="danger" onClick={() =>this.props. editContact (this.state)}>Edit</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

  )
}
export default connect(null, { editContact })(ContactItem)
