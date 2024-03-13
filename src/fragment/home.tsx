import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div  style={{textAlign: 'center'}}>
            <div className="main-font typewriter">
                <p style={{maxWidth: '42rem'}}>Hello there! 👋 
                    <br />
                    I'm a software developer with two years of experience, and I'm thrilled to welcome you to my site! 
                    If you're intrigued by what you see, I'd be delighted to connect with you and hear your thoughts. 
                    <br />
                    Don't hesitate to reach out — I'm all ears! 😊</p>   
            </div>   
            
            <Button variant="primary">See my resume</Button>{' '} or&nbsp;
            <Button variant="secondary">Explore my site</Button>{' '}
        </div>
    )
}

export default Home