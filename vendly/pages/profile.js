const Profile = () => {
    return ( 
        <main className="relative">
            {/* side bar - left view start */}
            <section className="fixed">
                sidebar
            </section>
            {/* side bar - end */}

            {/* main view - middle view start */}
            <section className="relative">
                middle
            </section>
            {/* main view - middle view end */}

            {/* notification view - left view start */}
            <section className="fixed">notification</section>
            {/* notification view - left view end */}
        </main>
     );
}
 
export default Profile;