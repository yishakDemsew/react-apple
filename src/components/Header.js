
function Header () {
    return (
        <div class="nav-wrapper fixed-top">
		    <div class="container">
			<nav class="navbar navbar-toggleable-sm navbar-expand-md">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a class="navbar-brand mx-auto" href="#"><img src="images/icons/logo-sm.png"></a>

			    <div class="navbar-collapse collapse">
			        <ul class="navbar-nav nav-justified w-100 nav-fill">
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li class="nav-item" ><a class="nav-link js-scroll-trigger" href="/search/"><img src="images/icons/search-icon-sm.png"></a></li>
						<li class="nav-item"><a  class="nav-link js-scroll-trigger" href="/cart/"><img src="images/icons/cart-sm.png"></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	    </div>
     ) ;
}

export default Header ;