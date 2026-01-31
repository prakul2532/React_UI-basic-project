import "../styles/Block1_style.css"
function Block({Video_Title , Video_Src , channel_name , rate}){
    const rating = "⭐".repeat(Number(rate));
    return(
        <>
        <div id="Box">
            <h3 className="heading"> <u>Upload Date</u>:- {new Date().toLocaleDateString()} </h3>
            <iframe src={`https://www.youtube.com/embed/${Video_Src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${Video_Src}&rel=0`} width="400" height="200" className="main_video" title="youtube video player"></iframe>
            <div className="footer_box">
                <span className="footer_closing">Youtube channel :- "<b><u>{channel_name}</u></b>"</span>
                <span className="footer_closing">video Title :- "<b><u>{Video_Title}</u></b>"</span>
            </div>
            <div className="footer_box">
                <span id="end_statement"> Rating :- {rating} </span>
            </div>
        </div>
        </>
    )
    
}

export default Block;