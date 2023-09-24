import ImaGe from "../ImaGe/ImaGe.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";



function Div({SrcLink,text})
{
    return(
    <div>
       <ImaGe SRClink={SrcLink}/>
       <Paragraph text={text}/>
    </div>);
}

export default Div;