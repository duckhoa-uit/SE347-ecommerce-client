import OrderSummary from "@components/order/component/order-sum";
import SelectPaymentMethod from "@components/order/component/payment-method";
import ShippingAddressForm from "@components/order/component/shipping-address-form";
import { MainLayout } from "@layouts/main";
import React from "react";

const OrderPage=()=>{
    return(
        <div>
            <OrderSummary />
            <SelectPaymentMethod />
            <ShippingAddressForm />
        </div>        
    )
}

OrderPage.Layout=MainLayout;
export default OrderPage;