import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';

const Card = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
          />
          <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle> To do #1</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='clock' /> 05/10/2015
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon far icon='comments' className='mr-1' />
                  12
                </a>
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='facebook-f' className='mr-1' />
                  21
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='twitter' className='mr-1' />5
                </a>
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default Card;