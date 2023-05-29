import {Scroll} from "@react-three/drei";

export default function ScrHtml(){
    return <Scroll html style={{ width: '100%' }}>
        <section id="home">
            <div className="container-fluid text-center">
                <main className="px-3">
                    <h1>Piquette</h1>
                    <p className="lead">
                        A new adventure video game by the French team Flipped Turtles
                    </p>
                    <p>
                        Scroll for more
                    </p>
                </main>
            </div>
        </section>

        <div className="p-4" id="sec1">
            <br /><br /><br />
            <div className="container">
                <h1>What is Piquette?</h1>
                <p>
                    "Piquette" is an adventure video game. In one of your most profound dreams, you find yourself in
                    a room in the company of Piquette, a small turtle who will be with you in each level of the
                    game. Players will have to succeed in moving from room to room if they wish to wake up, once you
                    wake up, you have won the game! Between puzzles, fights, courses, and many others, will players
                    come out unscathed?
                </p>
                <p>
                    Players will go from level to level in the eyes of the character they play. The game will be
                    accessible for one player or in a duo, having for characters: Piketty, the only character
                    accessible in solo, and Piquette, a character accessible in a duo. Several modes will be
                    available. First of all, when you launch the game for the first time, you have access to the
                    "normal" and "hard" modes. In the first mode, if the player dies in a level, he starts again at
                    the beginning of the level, while in the "hard" mode, the player starts his progression from
                    scratch. Once the game is finished, another mode is unlocked, "level choice", which allows doing
                    any room separately. At the end of each game, the statistics will be displayed: the time is
                    taken and the number of times the player died.
                </p>
            </div>
            <div className="container">
                <br />
                    <hr /><br />
                        <h1>Menus</h1>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./menu/SharedScreenshotMain_menu.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Main menu</h1>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./menu/SharedScreenshotMODE.jpg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Difficulty choice</h1>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./menu/SharedScreenshotSettings.jpg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Settings menu</h1>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./menu/SharedScreenshotSelection.jpg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Level selection</h1>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./menu/SharedScreenshotPause.jpg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Pause menu</h1>
                                        </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
            </div>
            <div className="container">
                <br/>
                    <hr/><br/>
                        <h1>Levels</h1>
                        <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./levels/Colisée%20piquette.jpeg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>The Colosseum</h1>
                                            <p>Here, the two players find themselves in the middle of a Roman coliseum
                                                in which they will have to survive several waves of enemies, being more
                                                and more numerous.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./levels/avion.png" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>The Plane</h1>
                                            <p>In this level, the players balances on a plane and has to control it to
                                                avoid a crash by moving on the wing of the plane. However, if the
                                                players decide to play in pairs, they must be synchronized to move the
                                                plane.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./levels/champi.jpeg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>The Library</h1>
                                            <p></p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./levels/poursuite new.png" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>The Chase</h1>
                                            <p>A big rock just start rolling down the hill and the players must run away
                                                while avoiding obstacles to not be crushed by the rock.</p></div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./levels/SharedScreenshotlaser.jpg" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>The Infiltration</h1>
                                            <p>Here the players must dodge lasers and jump acrosse platforms without
                                                getting hit, like the spy in the impossible mission movie</p>
                                        </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
            </div>
            <br /><br /><br />
        </div>


        <div id="sec2">
            <br /><br /><br />
            <div className="container">
                <h1>Who are we?</h1>
                <p>
                    We are all freshmen at Epita with scientific studies during high school. We have the ambition to
                    create a complete and original game, hoping everything will be made with our own hands. This
                    will allow us to acquire the necessary technical knowledge. We are determined to carry out this
                    project which is close to our hearts. Our group is called "Flipped Turtles".
                </p>
                <p>
                    The project we present below is built on the inspirations we had during discussions within our
                    group. These inspirations are based on personal opinions, and experiences from playing some
                    similar games and others. We were inspired by some existing games to bring our project to life;
                    we can mention Valve's Portal and Half-Life for the journey and adventure side or Total Mayhem
                    Games' We Were Here for the puzzles and cooperation. There are also other inspirations like the
                    movie Alice in Wonderland or the urban legend of Backrooms. We hope you will enjoy our video
                    game, don’t hesitate to leave feedback!
                </p>
            </div>
            <div className="container">
                <br />
                <hr /><br />
                <h1>The Team</h1>
                <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to="0" className="active" aria-current="true"
                                aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./team/20230417_143540.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>On a bench</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./team/20230417_144032.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Thinking...</h1>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br /><br /><br />
        </div>
        <div style={{backgroundColor: "#2f4858", color: "#b2b2b2"}} id="contact">
            <br/><br/>
                <div className="container d-flex flex-row">
                    <h3 className="p-3">CONTACT:</h3>
                    <div className=" p-3">
                        <a className="btn btn-primary btn-lg btn-floating"
                           style={{backgroundColor: "#ac2bac"}}
                           href="https://www.instagram.com/thepiquette/"
                           role="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-instagram" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </a></div>
                    <div className="p-3">
                        <div>Email:</div>
                        <div>piquette.flippedturtle@gmail.com</div>
                    </div>
                </div>
                <br/><br/>

        </div>
    </Scroll>
}