export default function Banner(){
    return <>
    <section class="bg-[url('src/assets/G1.jpg')] bg-no-repeat bg-cover p-5">
        <article class="flex flex-row p-5" id="h">
            <div class="text-7xl w-1/2 font-medium flex-grow">
                Welcome To Trends Wear<br/>
                <span class="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    At quam accusantium beatae sit, ea tenetur Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum officiis, exercitationem molestiae, magni dolor expedita quo assumenda ullam molestias voluptate
                    obcaecati aliquid. Fugiat consectetur placeat iusto dolorum aperiam voluptas.
                    <button class="bg-gray-900 font-medium mx-4 p-4 rounded-full">
                        <a href="#P" class="flex-grow text-xl text-white">Let's Shop Now</a></button>
                </span>
            </div>
            <div class="flex-grow h-20 w-20  ">
                <img src="src/assets/black-friday.png" alt="shopping-bag"/>
            </div>
        </article>
    </section>
    </>
}