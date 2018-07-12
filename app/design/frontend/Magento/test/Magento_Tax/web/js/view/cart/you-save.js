/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Checkout/js/view/summary/abstract-total',
    'Magento_Checkout/js/model/quote',
], function (Component, quote) {
    'use strict';

    return Component.extend({
        items: quote.getItems(),

        getSave:function () {
            var summ = 0;
            this.items.forEach(function(item,index,arr) {
                if(item.product.hasOwnProperty('special_price')){
                    summ += (item.product.price - item.product.special_price)*item.qty;
                }
            });

            return this.getFormattedPrice(summ);
        }
    });
});
