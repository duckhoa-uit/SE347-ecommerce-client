import AccordionOrderTracking from "@components/user/components/accordion-order-tracking";
import AccountDetailForm from "@components/user/components/account-detail-form";
import AccountOrders from "@components/user/components/account-orders";
import ChangePasswordForm from "@components/user/components/change-password-form";
import OrderTrackingStepper from "@components/user/components/order-tracking-stepper";
import ShippingInfoForm from "@components/user/components/shipping-info-form";
import { MainLayout } from "@layouts/main";
import React from "react";

const UserPage=()=>{
    return(
        <div>
            <AccordionOrderTracking />
            <AccountDetailForm />
            <AccountOrders />
            <ChangePasswordForm />
            <OrderTrackingStepper />
            <ShippingInfoForm />
            // TODO: Should i add components from "tabs" folder or not ?
        </div>
    )
}

UserPage.Layout=MainLayout;
export default UserPage;