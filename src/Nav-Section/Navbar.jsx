export default function Navbar(){
    return <>
        <nav className="Container flex flex-row p-2 justify-between bg-purple-500 text-white">
            <span class="p-3"><img src="src/assets/trolley.png" height="25px" width="65px"/></span>
            <h1 class=" flex-grow text-5xl font-bold text-stone-700 font-mono p-5">
                <span class="font-bold text-5xl text-white">T</span><span class="text-white">rends</span>
                <span class="font-bold text-5xl text-white">W</span><span class="text-white">ear</span>
            </h1>
            <div  class="p-4 flex-grow text-xl">
             <input type="search" placeholder="Let's Try Trends........."
                    class="border-4 text-black rounded-2xl p-3"/></div>
            <ul class="hidden lg:flex my-5 gap-10 flex-grow justify-end text-xl mr-3 font-medium ">
                <li class="p-2 hover:bg-gray-950 rounded-2xl ">
                    <a href="./Trend.html">Home</a>
                </li>
                <li class="p-2 hover:bg-gray-950 rounded-2xl">
                    <a href="">About</a>
                </li>
                <li class="p-2 rounded-2xl">
                    <details class="">
                        <summary>Products</summary>
                        <p class=""><a href="" class="">Men's Wear</a></p>
                        <p class=""><a href="" class="">Women's Wear</a></p>
                        <p class=""><a href="" class="">Kids Wear</a></p>
                        <p class=""><a href="" class="">Summer Wear</a></p>
                    </details>
                </li>
                <li>
                    <a href="">
                        <img src="src/assets/icons8-cart-100.png" height="15px" width="40px"/>&nbsp;Cart</a>
                </li>
                <li>
                    <a href="">
                        <img src="src/assets/icons8-heart-100.png" height="15px" width="40px"/>Fav</a>
                </li>
                <li>
                    <a href="">
                        <img src="src/assets/icons8-user-icon-100.png" height="15px" width="40px"/>User</a>
                </li>
                </ul>
        </nav>
    </>
}