export default function Login() {
    return <>
        <div class="lg:m-20 mx-10">
            <div class="text-6xl text-gray-900 font-medium p-5">User Verfication</div>
            <center>
                <section class="grid grid-cols-2 gap-10 ">
                    <div class="text-5xl col-span-full font-medium text-center text-gray-900">Kindly Login Our Site</div>
                    <div class="col-span-full">
                        <img src="src/assets/user-profile.png" alt="" height="400px" width="400px" />
                    </div>
                    <div class="text-4xl text-center bg-blue-700 p-3 rounded-full text-white">
                        <button class=""><a href="">Sign Up</a></button>
                    </div>
                    <div className="text-4xl text-center bg-blue-700 p-3 rounded-full text-white">
                        <button class=""><a href="./Login Page.html">Log In</a></button>
                    </div>
                </section>
            </center>
        </div>
    </>
}