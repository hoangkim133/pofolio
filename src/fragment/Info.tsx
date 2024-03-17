import { Row } from "react-bootstrap";


function Info() {
    return (
        <>
            <Row className="main-font" style={{marginTop:'3rem'}}>
                <h2>Name</h2>
                <h2>Age</h2>
                <h2>Education</h2>
            </Row>
            <div className="img-info"></div>
            <img src="./coimg.jpg" alt="" className="img-info-child"/>
        </>

        
    )
}

export default Info