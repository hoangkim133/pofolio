import * as Icon from "react-bootstrap-icons"

type Props = {
    name: string;
    index: number;
    total: number;
};

function EffectCarouselControl({name, index, total}: Props) { 
    const clickPre = () => {
        var conFather = document.getElementById(name);
        if (conFather) {
            var preButton: HTMLElement = conFather.getElementsByClassName("carousel-control-prev")[0] as HTMLElement;
            if (preButton) {
                preButton.click();
            }
        }
    }

    const clickNext = () => {
        var conFather = document.getElementById(name);
        if (conFather) {
            var nextButton: HTMLElement = conFather.getElementsByClassName("carousel-control-next")[0] as HTMLElement;
            if (nextButton) {
                nextButton.click();
            }
        }
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div className="center-dis-al pointed" onClick={clickPre}>
                <Icon.ArrowLeft/>
            </div>
                <span style={{margin: "0 1rem", fontSize: "14px"}}>{index + 1}&nbsp;/&nbsp;{total}</span>
            <div className="center-dis-al pointed" onClick={clickNext}>
                <Icon.ArrowRight></Icon.ArrowRight>
            </div>
        </div>
    )
}

export default EffectCarouselControl