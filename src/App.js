import React from 'react'
import "./App.css"

function App() {
    return (
        <div className="App bg-dark">   
          <div className="container-fluid">
          <nav className="navbar ml-auto navbar-expand-lg bg-dark rounded mb-1 navbar-fixed-top">
            <button className="navbar-toggler ml-auto bg-secondary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-sliders" aria-hidden="true"></i>
            </button>        

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 bg-dark text-primary" type="search" placeholder="Search" aria-label="Search" id="searchbar"/>
                <button className="btn btn-dark my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button className="mr-2 btn btn-secondary nav-link text-primary rounded mb-2" href="#">Log in<span class="sr-only">(current)</span></button>
                </li>
                <li className="nav-item">
                  <button className="mr-2 nav-link btn btn-primary text-white rounded" href="#">Try Now</button>
                </li> 
                </ul>        
            </div>

          </nav> 
        
          
          <div className="row">
            <nav className="col-md-2 ml-3 d-none d-md-block bg-dark sidebar rounded">
         <div className="sidebar-sticky">
            
          <ul className="nav flex-column">
            <h5>
            <li className="nav-link active text-white">
            <i className="fa fa-video-camera mr-1" aria-hidden="true"></i>My Movies
            </li>
            </h5>
            <li className="nav-link disabled">
               Categories
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#">
                <i className="fa fa-home mr-1" aria-hidden="true"></i>
              Main Page <span class="sr-only">(current)</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-tablet mr-1" aria-hidden="true"></i>
              TV Channels<span className="sr-only">(current)</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#">
                <i className="fa fa-camera-retro mr-1" aria-hidden="true"></i>
              Movies
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-television mr-1" aria-hidden="true"></i>
              TV Series
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#">
                <i className="fa fa-play mr-1" aria-hidden="true"></i>
              Concerts
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-futbol-o mr-1" aria-hidden="true"></i>
              Sport
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-child mr-1" aria-hidden="true"></i>
              For Kids
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-heart mr-1" aria-hidden="true"></i>
              Favourites
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-white" href="#"><i className="fa fa-user mr-1" aria-hidden="true"></i>
              Personal Data
            </a>
            </li>
         </ul>       
      </div>
      </nav>
            
            <div className="container bg-dark col-md-9 col-lg-9">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
                  <div className="carousel-inner d-block h-100 w-100">     
                  
                  <div className="carousel-item">
                     <img className="card-img-top img-fluid d-block h-100 w-100" src={require('./Images/A.jpg')} alt="Card image cap"/>
                  </div>

                  <div className="carousel-item active">
                     <img className="card-img-top img-fluid d-block h-100 w-100" src={require('./Images/infinity.jpg')} alt="Card image cap"/>
                  </div>

                  <div className="carousel-item">
                     <img className="card-img-top img-fluid d-block h-100 w-100" src={require('./Images/Avengers1.jpg')} alt="Card image cap"/>
                  </div>

                  </div>
                  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
            </div>  
            
            <div className="row col-md-9 ml-auto">
            <button className="btn btn-block btn-primary mt-2 mb-2">Phase-1</button>
          </div>
          <div className="row col-md-9 ml-auto">
          <div id="c1"class="col-md-3 col-sm-3">
          <div className="card float-right">
            <img src={require("./Movies/Iron Man/e5751316c3b567b2e17c914c5c51c85d.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ironman1">Iron Man</button>  
                <div className="text-primary mt-1"id="ironman1"className="collapse">
                    Movie: Iron Man<br/>
                    Released: 2 May 2008<br/> 
                    Cast: Robert Downey Jr., Gwyenth Paltrow, Terence Howard.<br/>
                    Director: Jon Favreau<br/>
                    Story: After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.<br/>                       
                </div>
            </div>
          </div>    
          
    </div>

    <div id="c2"className="col-md-3 col-sm-3">
          <div className="card float-right">
            <img src={require("./Movies/The Incredible Hulk/1206861-incredible_hulk_un_official_poster_4.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#tih">The Incredible Hulk</button>  
                <div className="text-primary mt-1"id="tih"className="collapse">
                    Movie: The Incredible Hulk<br/>
                    Released: 13 June 2008<br/> 
                    Cast: Edward Norton, Liv Tyler, Tim Roth.<br/>
                    Director: Louis Leterrier<br/>
                    Story: Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.                     
                </div>
            </div>
        </div>
         
    </div>

    <div id="c3"className="col-md-3 col-sm-3">
          <div className="card float-right">
            <img src={require("./Movies/Iron Man 2/movieposter.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#im2">Iron Man 2</button>  
                <div className="text-primary mt-1"id="im2"className="collapse">
                    Movie: Iron Man 2<br/>
                    Released: 30 April 2010<br/>
                    Cast: Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow.<br/>
                    Director: Jon Favreau<br/>
                    Story: With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.                 
                </div>
            </div>
          </div>
         
    </div> 

    <div id="c4" className="col-md-3 col-sm-3">
        <div className="card float-right">
          <img src={require("./Movies/Thor/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark text-center">
            <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#thor">Thor</button>  
            <div className="text-primary mt-1"id="thor"className="collapse">
                Movie: Thor <br/>
                Released: 27 April 2011<br/>
                Cast: Chris Hemsworth, Anthony Hopkins, Natalie Portman.<br/>
                Director: Kenneth Branagh<br/>
                Story: The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.                 
            </div>
        </div>
        </div>
       
  </div>

  <div id="c5"className="col-md-3 col-sm-3">
    <div className="card float-right">
      <img src={require("./Movies/Captain America - The First Avenger/7d4ecc8bc5ccf7fa94765222011b17cf.jpg")} className="card-img-top" alt="..."/>
      <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ca1">Captain America: The First Avenger</button>  
        <div className="text-primary mt-1"id="ca1"className="collapse">
            Movie: Captain America: The First Avenger<br/>
            Released: 29 July 2011<br/>
            Cast: Chris Evans, Hugo Weaving, Samuel L. Jackson.<br/>
            Director: Joe Johnston<br/>
            Story: Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.        
        </div>
    </div>
    </div>
   
  </div>

<div id="c6" className="col-md-3 col-sm-3">
<div className="card float-right">
  <img src={require("./Movies/The Avengers/b2090d1ae0c016943371b6c01dddcf08.jpg")} className="card-img-top" alt="..."/>
  <div className="card-body bg-dark text-center">
    <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#A1">The Avengers</button>  
    <div className="text-primary mt-1"id="A1"class="collapse">
        Movie: The Avengers<br/>
        Released: 26 April 2012<br/> 
        Cast: Robert Downey Jr., Chris Evans, Scarlett Johansson.<br/>
        Director: Joss Whedon<br/>
        Story: Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.      
    </div>
</div>
</div>
  </div> 
</div>

          
<div className="row col-md-9 ml-auto">
<button className="btn btn-block btn-primary mt-2 mb-2">Phase-2</button>
</div>
<div className="row col-9 ml-auto">
  <div id="c1"className="col-md-3">
        <div className="card float-right">
          <img src={require("./Movies/Iron Man 3/ironman3_lob_crd_01_10.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark text-center">
              <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#im3">Iron Man 3</button>  
              <div className="text-primary mt-1"id="im3"className="collapse">
                  Movie: Iron Man 3<br/>
                  Released: 25 April 2013<br/> 
                  Cast: Robert Downey Jr., Guy Pearce, Gwyneth Paltrow .<br/>
                  Director: Shane Black<br/>
                  Story: When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.      
              </div>
          </div>
      </div>    
  </div>

  <div id="c2"className="col-md-3">
        <div className="card float-right">
          <img src={require("./Movies/Thor - The Dark World/unnamed.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark text-center">
              <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#thor2">Thor: The Dark World</button>  
              <div className="text-primary mt-1"id="thor2"className="collapse">
                  Movie: Thor: The Dark World<br/>
                  Released: 30 October 2013<br/> 
                  Cast: Chris Hemsworth, Natalie Portman, Tom Hiddleston.<br/>
                  Director: Alan Taylor<br/>
                  Story: When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.
              </div>
          </div>
      </div>
       
  </div>

  <div id="c3"className="col-md-3">
        <div className="card float-right">
          <img src={require("./Movies/Captain America - The Winter Soldier/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark text-center">
              <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ca2">Captain America: The Winter Soldier</button>  
              <div className="text-primary mt-1"id="ca2"className="collapse">
                  Movie: Captain America: The Winter Soldier<br/>
                  Released: 26 March 2014<br/> 
                  Cast: Chris Evans, Samuel L. Jackson, Scarlett Johansson .<br/>
                  Director: Anthony Russo, Joe Russo<br/>
                  Story: As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.
              </div>
          </div>
      </div>
       
  </div>

  <div id="c4" className="col-md-3">
      <div className="card float-right">
        <img src={require("./Movies/Guardians Of The Galaxy/737eeb8439b05ce9fd28dd47049f5d17.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body bg-dark text-center">
          <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#gog">Guardians Of The Galaxy</button>  
          <div className="text-primary mt-1"id="gog"className="collapse">
              Movie: Guardians Of The Galaxy<br/>
              Released: 31 July 2014<br/> 
              Cast: Chris Pratt, Vin Diesel, Bradley Cooper.<br/>
              Director: James Gunn<br/>
              Story: A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.
          </div>
      </div>
      </div>
     
</div>

<div id="c5"className="col-md-3">
  <div className="card float-right">
    <img src={require("./Movies/Avengers - Age Of Ultron/5dd2a933cbe60f19d0485cc74ca76236.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
      <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#A2">Avengers: Age Of Ultron</button>  
      <div className="text-primary mt-1"id="A2"className="collapse">
          Movie: Avengers: Age Of Ultron<br/>
          Released: 23 April 2015<br/> 
          Cast: Robert Downey Jr., Chris Evans, Mark Ruffalo<br/>
          Director:  Joss Whedon<br/>
          Story: When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.
      </div>
  </div>
  </div>
 
</div>

<div id="c6" className="col-md-3">
<div className="card float-right">
<img src={require("./Movies/Ant-Man/a3f3f7ab164af088fa6f3947738ee1f0.jpg")} className="card-img-top" alt="..."/>
<div className="card-body bg-dark text-center">
  <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ant">Ant-Man</button>  
  <div className="text-primary mt-1"id="ant"className="collapse">
      Movie: Ant-Man<br/>
      Released: 17 July 2015<br/> 
      Cast: Paul Rudd, Michael Douglas, Corey Stoll<br/>
      Director:  Peyton Reed<br/>
      Story: Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.
  </div>
</div>
</div>
</div>

</div>  
        

<div className="row col-9 ml-auto">
<button className="btn btn-block btn-primary mt-b mb-2">Phase-3</button>
</div>
<div className="row col-9 ml-auto">
    <div id="c1"className="col-md-3">
          <div className="card float-right">
            <img src={require("./Movies/Captain America - Civil War/451c97801dacffe00eb7314e843ec5e3.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ca3">Captain America: Civil War</button>  
                <div className="text-primary mt-1"id="ca3"className="collapse">
                    Movie: Captain America: Civil War<br/>
                    Released: 26 April 2016<br/> 
                    Cast: Chris Evans, Robert Downey Jr., Scarlett Johansson<br/>
                    Director: Anthony Russo, Joe Russo<br/>
                    Story: Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.
                </div>
            </div>
        </div>    
    </div>

    <div id="c2"className="col-md-3">
          <div className="card float-right">
            <img src={require("./Movies/Doctor Strange/doctor-strange-poster_thumb.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ds">Doctor Strange</button>  
                <div className="text-primary mt-1"id="ds"className="collapse">
                    Movie: Doctor Strange<br/>
                    Released: 25 October 2016<br/> 
                    Cast: Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams <br/>
                    Director: Scott Derrickson<br/>
                    Story:While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.
                </div>
            </div>
        </div>
         
    </div>

    <div id="c3"className="col-md-3">
          <div className="card float-right">
            <img src={require("./Movies/Guardians Of The Galaxy Vol.2/guardians2imaxpostermixtape_thumb.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark text-center">
                <button class="btn btn-primary btn-sm" data-toggle="collapse" data-target="#got2">Guardians Of The Galaxy Vol.2</button>  
                <div className="text-primary mt-1"id="got2"className="collapse">
                    Movie: Guardians Of The Galaxy Vol.2<br/>
                    Released: 28 April 2017<br/> 
                    Cast: Chris Pratt, Zoe Saldana, Dave Bautista <br/>
                    Director: James Gunn<br/>
                    Story: The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.
                </div>
            </div>
        </div>
         
    </div>

    <div id="c4" className="col-md-3">
        <div className="card float-right">
          <img src={require("./Movies/Spider-Man Homecoming/thumb-172340.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark text-center">
            <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#sm">Spider-Man Homecoming</button>  
            <div className="text-primary mt-1"id="sm"className="collapse">
                Movie: Spider-Man Homecoming<br/>
                Released: 5 July 2017<br/> 
                Cast:Tom Holland, Michael Keaton, Robert Downey Jr.  <br/>
                Director: Jon Watts<br/>
                Story: Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.
            </div>
        </div>
        </div>
       
  </div>

  <div id="c5"className="col-md-3">
    <div className="card float-right">
      <img src={require("./Movies/Thor Ragnarok/98547554ebbc9d0f461a554fd2873654.jpg")} className="card-img-top" alt="..."/>
      <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#thor3">Thor: Ragnarok</button>  
        <div className="text-primary mt-1"id="thor3"className="collapse">
            Movie: Thor: Ragnarok<br/>
            Released: 24 October 2017<br/> 
            Cast: Chris Hemsworth, Tom Hiddleston, Cate Blanchett<br/>
            Director: Taika Waititi<br/>
            Story: Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.
        </div>
    </div>
    </div>
   
  </div>

  <div id="c6" className="col-md-3">
  <div className="card float-right">
  <img src={require("./Movies/Black Panther/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg")} className="card-img-top" alt="..."/>
  <div class="card-body bg-dark text-center">
    <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#bp">Black Panther</button>  
    <div className="text-primary mt-1"id="bp"className="collapse">
        Movie: Black Panther<br/>
        Released: 13 February 2018<br/> 
        Cast: Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o <br/>
        Director: Ryan Coogler<br/>
        Story: T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.
    </div>
</div>
</div>
  </div>

  <div id="c7" className="col-md-3">
    <div className="card float-right">
    <img src={require("./Movies/Avengers - Infinity War/avengers-imax-main-large_thumb.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#A3">Avengers: Infinity War</button>  
        <div className="text-primary mt-1"id="A3"className="collapse">
            Movie: Avengers: Infinity War<br/>
            Released: 26 April 2018<br/> 
            Cast: Robert Downey Jr., Chris Hemsworth, Mark Ruffalo <br/>
            Director: Anthony Russo, Joe Russo<br/>
            Story: The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.
        </div>
    </div>
</div>
  </div>

  <div id="c8" className="col-md-3">
    <div className="card float-right">
    <img src={require("./Movies/Ant-Man And The Wasp/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#ant2">Ant-Man And The Wasp</button>  
        <div className="text-primary mt-1"id="ant2"className="collapse">
            Movie: Ant-Man And The Wasp<br/>
            Released: 02 August 2018<br/> 
            Cast: Paul Rudd, Evangeline Lilly, Michael Peña<br/>
            Director: Peyton Reed<br/>
            Story: As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.
        </div>
    </div>
</div>
  </div>

  <div id="c9" className="col-md-3">
    <div className="card float-right">
    <img src={require("./Movies/Captain Marvel/captainmarvel_lob_crd_06.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#cm">Captain Marvel</button>  
        <div className="text-primary mt-1"id="cm"className="collapse">
            Movie: Captain Marvel<br/>
            Released: 08 March 2019<br/> 
            Cast:  Brie Larson, Samuel L. Jackson, Ben Mendelsohn <br/>
            Director: Anna Boden, Ryan Fleck<br/>
            Story: Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.
        </div>
    </div>
</div>
  </div>

  <div id="c10" className="col-md-3">
    <div className="card float-right">
    <img src={require("./Movies/Avengers - Endgame/avengers_endgame_ver45_xlg.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#A4">Avengers: Endgame</button>  
        <div className="text-primary mt-1"id="A4"className="collapse">
            Movie: Avengers Endgame<br/>
            Released: 25 March 2019<br/> 
            Cast: Robert Downey Jr., Chris Evans, Mark Ruffalo <br/>
            Director: Anthony Russo, Joe Russo<br/>
            Story: After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
        </div>
    </div>
</div>
  </div>

  <div id="c11" className="col-md-3">
    <div className="card float-right">
    <img src={require("./Movies/Spider-Man Far From Home/spider-man-far-from-home-poster-fury-mysterio-2.jpg")} className="card-img-top" alt="..."/>
    <div className="card-body bg-dark text-center">
        <button className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#sm2" aria-expanded="false" aria-controls="sm2">Spider-Man Far From Home</button>  
        <div className="text-primary mt-1"id="sm2"className="collapse">
            Movie: Spider-Man Far From Home<br/>
            Released: 02 July 2019<br/> 
            Cast: Tom Holland, Samuel L. Jackson, Jake Gyllenhaal <br/>
            Director: Jon Watts<br/>
            Story: Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.
        </div>
    </div>
    </div>
  </div>


          </div>




        </div>
                  
          
          
          </div>
          </div>     
        </div>
    )
}

export default App
