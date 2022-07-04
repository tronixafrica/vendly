import { BankDetailsIcon, BusinessInfoIcon, ContactIcon, HealthIcon } from "../../iconsComponent/Icons";
import Metric from "../Metric";
import PageLinks from "../PageLinks";

const Account = () => {
    const accountTabsPageLinks = [
        { icon: <HealthIcon width="25" height="25" />, tabName: 'Profile', id: 1},
        { icon: <BusinessInfoIcon width="25" height="25" />, tabName: 'Business Information', id: 2},
        { icon: <BankDetailsIcon width="25" height="23" />, tabName: 'Bank Details', id: 3},
        { icon: <ContactIcon width="22" height="24" />, tabName: 'Contact Details', id: 4}
    ]

   
    return ( 
        <div className="w-full px-6">
            {/* visitors and reviews metrics */}
            <Metric 
            visitorsValues='20'
            metricTypeOne='visitors'
            reviewsValues='4.2k'
            metricTypeTwo='reviews'
            />

            {/* start profile, business information, bank details and contact details */}
            <PageLinks accountTabsPageLinks={accountTabsPageLinks}/>
            {/* end profile, business information, bank details and contact details */}
        </div>
    );
}
 
export default Account;