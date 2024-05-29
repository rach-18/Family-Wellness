import '../App.css';

function Header() {
    return(
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
                    <a class="items-center text-gray-900 mb-4 md:mb-0">
                        <p class="text-3xl text-pink-950">Family Wellness</p>
                        <p class="">MASSAGE THERAPY</p>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center font-semibold cursor-pointer justify-center">
                        <a class="mr-5 text-pink-950">HOME</a>
                        <a class="mr-5 hover:text-pink-950">ABOUT</a>
                        <a class="mr-5 hover:text-pink-950">SERVICES</a>
                        <a class="mr-5 hover:text-pink-950">FAQ</a>
                        <a class="mr-5 hover:text-pink-950">CONTACT</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;

