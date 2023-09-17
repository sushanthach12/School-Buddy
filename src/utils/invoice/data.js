
export const createData = () => {

    const invoiceData = {
        // Customize enables you to provide your own templates
        // Please review the documentation for instructions and examples
        "customize": {
             "template": `PCFET0NUWVBFIGh0bWw+CjxodG1sPgoKPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDx0aXRsZT5BIEludm9pY2U8L3RpdGxlPgoKICAgIDxzdHlsZT4KICAgICAgICAuaW52b2ljZS1ib3ggewogICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4OwogICAgICAgICAgICBtYXJnaW46IGF1dG87CiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7CiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2M4MDk7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7CiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgY29sb3I6ICM1NTU7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgewogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdGQgewogICAgICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkIHsKICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkLnRpdGxlIHsKICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4OwogICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQgewogICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDsKICAgICAgICB9CgogICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5oZWFkaW5nIHRkIHsKICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTsKICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICAgIH0KCiAgICAgICAgLmludm9pY2UtYm94IHRhYmxlIHRyLmRldGFpbHMgdGQgewogICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsKICAgICAgICB9CgogICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5pdGVtIHRkIHsKICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7CiAgICAgICAgfQoKICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbS5sYXN0IHRkIHsKICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsKICAgICAgICB9CgogICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3RhbCB0ZDpudGgtY2hpbGQoMikgewogICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTsKICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgfQoKICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7CiAgICAgICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQgewogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLmludm9pY2UtYm94IHRhYmxlIHRyLmluZm9ybWF0aW9uIHRhYmxlIHRkIHsKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8qKiBSVEwgKiovCiAgICAgICAgLmludm9pY2UtYm94LnJ0bCB7CiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsOwogICAgICAgICAgICBmb250LWZhbWlseTogVGFob21hLCAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgICB9CgogICAgICAgIC5pbnZvaWNlLWJveC5ydGwgdGFibGUgewogICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsKICAgICAgICB9CgogICAgICAgIC5pbnZvaWNlLWJveC5ydGwgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHsKICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsKICAgICAgICB9CiAgICA8L3N0eWxlPgo8L2hlYWQ+Cgo8Ym9keT4KICAgIDxkaXYgY2xhc3M9Imludm9pY2UtYm94Ij4KICAgICAgICA8dGFibGUgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIj4KICAgICAgICAgICAgPHRyIGNsYXNzPSJ0b3AiPgogICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiPgogICAgICAgICAgICAgICAgICAgIDx0YWJsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPSJ0aXRsZSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT0iZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzdGFydDsgYWxpZ24taXRlbXM6Y2VudGVyOyB0b3A6IDA7IGxlZnQ6IDA7IGdhcDogMTBweDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt7aW1hZ2VfdXJsfX0gc3R5bGU9IndpZHRoOiA3MHB4OyBoZWlnaHQ6IDcwcHg7IGJvcmRlci1yYWRpdXM6IDUwJSIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2RhdGEuc2Nob29sX25hbWV9PC9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSAjOiAke2RhdGEuaW52b2ljZU5vfTxiciAvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZWQ6ICR7ZGF0YS5jcmVhdGVkX2F0fTxiciAvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgPC90cj4KCiAgICAgICAgICAgIDx0ciBjbGFzcz0iaW5mb3JtYXRpb24iPgogICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiPgogICAgICAgICAgICAgICAgICAgIDx0YWJsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHRyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0YS5zY2hvb2xfbmFtZX0sIEluYy48YnIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGEuYWRkcmVzc308YnIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0YS5zY2hvb2xfbmFtZX0uPGJyIC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLmVtYWlsfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPgogICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgPC90cj4KCiAgICAgICAgICAgIDx0ciBjbGFzcz0iaGVhZGluZyI+CiAgICAgICAgICAgICAgICA8dGQ+UGF5bWVudCBNZXRob2Q8L3RkPgoKICAgICAgICAgICAgICAgIDx0ZD4ke2RhdGEucGF5bWVudF9tZXRob2R9PC90ZD4KICAgICAgICAgICAgPC90cj4KCiAgICAgICAgICAgIDxiciAvPgoKICAgICAgICAgICAgPHRyIGNsYXNzPSJoZWFkaW5nIj4KICAgICAgICAgICAgICAgIDx0ZD5JdGVtPC90ZD4KCiAgICAgICAgICAgICAgICA8dGQ+RGVzY3JpcHRpb248L3RkPgogICAgICAgICAgICA8L3RyPgoKICAgICAgICAgICAgPHRyIGNsYXNzPSJpdGVtIj4KICAgICAgICAgICAgICAgIDx0ZD4ke2RhdGEudGFnX25hbWV9PC90ZD4KCiAgICAgICAgICAgICAgICA8dGQ+JHtkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+CiAgICAgICAgICAgIDwvdHI+CgogICAgICAgIDwvdGFibGU+CiAgICA8L2Rpdj4KPC9ib2R5PgoKPC9odG1sPg==` // Must be base64 encoded html 
        },
        "images": {
            // The logo on top of your invoice
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
            // The invoice background
            "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
        },
        // Your own data
        "sender": {
            "company": "Sample Corp",
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Sampletown",
            "country": "Samplecountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        // Your recipient
        "client": {
            "school_name": "Client Corp",
            "address": "Clientstreet 456",
            "zip": "4567 CD",
            "city": "Clientcity",
            "country": "Clientcountry"
            // "custom1": "custom value 1",
            // "custom2": "custom value 2",
            // "custom3": "custom value 3"
        },
        "information": {
            // Invoice number
            "number": "2021.0001",
            // Invoice data
            "date": "12-12-2021",
            // Invoice due date
            "due-date": "31-12-2021"
        },
        // The products you would like to see on your invoice
        // Total values are being calculated automatically
        "products": [
            {
                "quantity": 2,
                "description": "Product",
                "tax-rate": 6,
                "price": 33.87
            },
            {
                "quantity": 4.1,
                "description": "Product 2",
                "tax-rate": 6,
                "price": 12.34
            },
        ],
        // The message you would like to display on the bottom of your invoice
        // "bottom-notice": "Kindly pay your invoice within 15 days.",
        // Settings to customize your invoice
        "settings": {
            "currency": "INR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
            // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')        
            // "margin-top": 25, // Defaults to '25'
            // "margin-right": 10, // Defaults to '25'
            // "margin-left": 10, // Defaults to '25'
            // "margin-bottom": 15, // Defaults to '25'
            "format": "A3", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
            // "height": "500px", // allowed units: mm, cm, in, px
            // "width": "800px", // allowed units: mm, cm, in, px
            "orientation": "landscape", // portrait or landscape, defaults to portrait
        },
        // Translate your invoice to your preferred language
        "translate": {
            // "invoice": "FACTUUR",  // Default to 'INVOICE'
            // "number": "Nummer", // Defaults to 'Number'
            // "date": "Datum", // Default to 'Date'
            // "due-date": "Verloopdatum", // Defaults to 'Due Date'
            // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
            "products": "Tag", // Defaults to 'Products'
            "quantity": "Description", // Default to 'Quantity'
            // "price": "Prijs", // Defaults to 'Price'
            // "product-total": "Totaal", // Defaults to 'Total'
            // "total": "Totaal", // Defaults to 'Total'
            // "vat": "btw" // Defaults to 'vat'
        },
    };

    return invoiceData;
}
