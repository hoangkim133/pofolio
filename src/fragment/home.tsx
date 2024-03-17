import Button from 'react-bootstrap/Button';

function Home() {
    const changeClass = () => {
        var wel = document.getElementById("welcome");
        var side = document.getElementById("welcome_side");

        if (wel) {
            if (wel.className == 'stage_inner__centerbox'){
                wel.className = "stage_inner__centerbox2";
            } else {
                wel.className = "stage_inner__centerbox";
            }
        }

        if (side) {
            if (side.className == 'stage_inner__sidebox'){
                side.className = "stage_inner__sidebox2";
            } else {
                side.className = "stage_inner__sidebox";
            }
        }
    };

    return (
        <div className="main-font">
            <div id='welcome' className='stage_inner__centerbox'>
                <p>
                    Hello there! 👋 
                    <br/> 
                    I'm a two-year software developer, and I'm thrilled to welcome you to my site! If you're intrigued, let's connect! 
                    <br/> 
                    Feel free to reach out — I'm all ears! 😊
                </p>   
                <Button onClick={changeClass} className='offset' style={{fontSize:"15px"}}>
                    Explore my site
                </Button>{' '}
            </div>   
            <div id='welcome_side' className='stage_inner__sidebox'>
                <p>INFO</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>
            </div>
            {/* <a href="https://drive.google.com/file/d/1831RxdNq-mOqw4nwqBLAKUaniCUrBLAZ/view?usp=sharing" target="_blank"><Button className='resume main-color'>See my resume</Button>{' '}</a> or&nbsp; */}

            
        </div>
    )
}

export default Home