import React from 'react';
import { Link } from 'react-router-dom';    
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => { 
            return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="AA">Home</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
<div class="navbar-nav">


<Link className="nav-item nav-link active" to="/">Movie<span className="sr-only">(current)</span></Link>
<Link className="nav-item nav-link" to='/favorite'>Cart</Link>
</div></div>
</nav>
)}

            

export default Navbar; 


/*<Link className="nav-item nav-link active" to="/register">Home<span className="sr-only">(current)</span></Link>*/
