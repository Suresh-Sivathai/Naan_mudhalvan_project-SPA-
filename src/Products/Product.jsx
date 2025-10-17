export default function Sponsers(){
    return <>
<section class="flex flex-col space-y-5 m-10">
        <details class="m-10">
            <summary class="text-5xl font-medium p-5">Our Co-Sponsers</summary>
            <article class="flex flex-row mx-auto space-x-5">
                 <div class="bg-gray-950 p-5 text-white">Pothys</div>
                <div class="bg-gray-950 p-5 text-white">RMKV</div>
                <div class="bg-gray-950 p-5 text-white">Chennai Sliks</div>
            </article>
        </details>
        <details class="m-10">
            <summary class="text-5xl font-medium  p-5">Our Branches</summary>
            <article class="flex text-3xl justify-around size-50">
                <div class="bg-gray-950 p-5 text-white">Coimbatore</div>
                <div class="bg-gray-950 p-5 text-white">Trichy</div>
                <div class="bg-gray-950 p-5 text-white">Chennai</div>
            </article>
        </details><br/><br/>
        <details class="relative m-10">
            <summary class="text-5xl font-medium p-5">Our Contents</summary>
            <article class="flex text-3xl justify-between size-100">
                <div class="bg-gray-950 p-5 text-white">Quality Clothes</div>
                <div class="bg-gray-950 p-5 text-white">Rich Styles</div>
                <div class="bg-gray-950 p-5 text-white">Mandly Looks</div>
            </article>
        </details>
    </section>
    <button class="bg-black rounded-full text-5xl pt-3 pb-3 pl-10 pr-10 absolute mx-[88%] -mt-[10%] text-white"><a
            href="#up">^</a></button>
    <br/><br/>
    </>
}