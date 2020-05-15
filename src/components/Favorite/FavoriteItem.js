import React from 'react';
import { Link } from 'react-router-dom';    
const FavoriteItem = () => { 
return (

<div>
<Link to="/favorite">
<i className="fa fa-shopping-cart"></i>
 <span className="badge badge-danger">2</span>
</Link>
</div>
)}

export default FavoriteItem; 