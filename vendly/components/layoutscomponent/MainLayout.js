import { useContext } from "react";
import NotificationBarContextProvider, { NotificationBarContext } from "../../context/NotificationBarContext";
import DesktopHeader from "../profile/header/DesktopHeader";
import DesktopSideBar from "../profile/sidebar/DesktopSidebar";
import NotificationSideBar from "../profile/sidebar/NotificationSidebar";
import styles from '../../styles/NotificationSidebar.module.css'
import MobileHeader from "../profile/header/MobileHeader";
import DisplaySearchContextProvider from "../../context/DisplaySearchContext";
import TabLinkContextProvider from "../../context/TabLinksContext";
import DisplayMobileHeaderProvider from "../../context/DisplayMobileHeaderContext";
import PageTitleContextProvider from "../../context/PageTitleContext";

const MainLayout = ({children}) => {
    const { toggle } = useContext(NotificationBarContext)

    return ( 
        <>
        {/* start Desktop Layout */}
        <div className="relative hidden sm:block">
            {/* start desktop sidebar */}
            <DesktopSideBar />
            {/* end desktop sidebar */}

            {/* starts header and children */}
            <section 
            className={`
            relative 
            bg-white
            h-full 
            ${toggle ? 'mx-[280px]' : 'ml-[285px]'}
            ${styles.profile_main}
            `}>
                {/* start header */}
                <DesktopHeader />
                {/* end header */}

                {/* start children */}
                { children }
                {/* end children */}
            </section>
            {/* ends header and children */}

            {/* start notification sidebar */}
            <NotificationSideBar />
            {/* end notification sidebar */}            
        </div>
        {/* end Desktop layout */}

        {/* start mobile layout */}
        <div className="block sm:hidden w-full relative">
            <MobileHeader />
            { children }
        </div>
        {/* end mobile layout */}
        </>
    );
}

export const getLayout = (page) => {
    return (
        <PageTitleContextProvider>
            <DisplayMobileHeaderProvider>
                <DisplaySearchContextProvider>
                    <NotificationBarContextProvider>
                        <TabLinkContextProvider>
                            <MainLayout>
                                {page}
                            </MainLayout>
                        </TabLinkContextProvider>
                    </NotificationBarContextProvider>
                </DisplaySearchContextProvider>
            </DisplayMobileHeaderProvider>
        </PageTitleContextProvider>
    )
} 
export default MainLayout;