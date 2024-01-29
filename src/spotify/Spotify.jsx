import style from "./spotify.module.css"
import img from "../images/spotify1.jpg.png"

const Spotify =()=>{

    return(
        <div>
        <section id={style.nav}>
            <article>
                <div id={style.img}>
                <a href="https://open.spotify.com/?"><img src={img} alt="" title="spotify"/></a> 
                {/* use svg tag in inspect for any logo rather than using images in div tag */}
                
                </div> 
                <div id={style.bar}>
                   <ol>
                    <li><a href="https://www.spotify.com/in-en/premium/" title="premium">Premium</a> </li>
                    <li><a href="https://support.spotify.com/in-en/" title="Support">Support</a></li>
                    <li><a href="https://www.spotify.com/in-en/download/windows/" title="Download">Download</a></li>
                    <li id={style.i}>|</li>
                    <li><a href="https://www.spotify.com/in-en/signup" title="Sign up">Sign up</a></li>
                    <li><a href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-IN" title="Login">Log in</a></li>
                   </ol>
                </div>

            </article>

        </section>


        <section id={style.home}>
        
       
           <article id={style.mobile}>
               <img src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b" role="none" class="sc-hZpJwi uZaHK"></img>
       
              <svg viewBox="0 0 290 590.58" aria-hidden="true" focusable="false" class="sc-jldrjA cHedBP"><path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path><path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
              
            </article>

           <p>Play millions of songs <br /> and podcasts, for free.</p>
           
           
              <a href=""><button>GET SPOTIFY FREE</button></a>
           

      
        </section>
        
       
       
        </div>

    )
}
export default Spotify