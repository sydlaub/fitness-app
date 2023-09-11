import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

const ProfilePage = () => {
    return (
        <>
        <MDBRow>
            <MDBCol lg='4'>
                    <MDBCard className="mb-4">
                        <MDBCardBody className='text-center'>
                            <p className="text-muted mb-1">User Name</p>
                        </MDBCardBody>
                        </MDBCard>
            </MDBCol>
        </MDBRow>
        </>
    )
};

export default ProfilePage;