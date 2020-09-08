import React from 'react'
import Crow from './crow.png'
const styles={
    height: "15vh",
    paddingTop: "2vh",
    background: "linear-gradient(264deg, rgba(194,244,255,0.8457982781228055) 0%, rgba(0,112,143,1) 100%)",
    fontSize: "30px",
    color: "#eee",
    position: "bottom",
    textAlign: "center"

}
export default function Footer() {
    return (
        <div style={styles}>
           <div>
                &nbsp;&nbsp;<img style={{height: "8vh"}} src={Crow} alt="Code Crow Svcs"/>
                &copy; <strong>Evan Pacholski</strong> 
                &nbsp;&nbsp;<a href="https://github.com/epachols" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"></i></a>
                &nbsp;&nbsp;<a href="https://www.linkedin.com/in/evan-pacholski-7910481ab/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                &nbsp;&nbsp;<a href="mailto:epacholski86@gmail.com&subject=Hi%20Evan%20-This%20Is%20A%20Portfolio%20Contact&body=Please-get-in-touch-with-me-regarding;" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
           </div>
        </div>
    )
}
