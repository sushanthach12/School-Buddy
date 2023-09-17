
export const pdfTemplate = (data) => {
    return `
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="utf-8" />
            <title>A Invoice</title>

            <style>
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #f3c809;
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #555;
                    height: 500px;
                }

                .invoice-box table {
                    width: 100%;
                    line-height: inherit;
                    text-align: left;
                }

                .invoice-box table td {
                    padding: 5px;
                    vertical-align: top;
                }

                .invoice-box table tr td:nth-child(2) {
                    text-align: right;
                }

                .invoice-box table tr.top table td {
                    padding-bottom: 20px;
                }

                .invoice-box table tr.top table td.title {
                    font-size: 45px;
                    line-height: 45px;
                    color: #333;
                }

                .invoice-box table tr.information table td {
                    padding-bottom: 40px;
                }

                .invoice-box table tr.heading td {
                    background: #eee;
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                }

                .invoice-box table tr.details td {
                    padding-bottom: 20px;
                }

                .invoice-box table tr.item td {
                    border-bottom: 1px solid #eee;
                }

                .invoice-box table tr.item.last td {
                    border-bottom: none;
                }

                .invoice-box table tr.total td:nth-child(2) {
                    border-top: 2px solid #eee;
                    font-weight: bold;
                }

                @media only screen and (max-width: 600px) {
                    .invoice-box table tr.top table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }

                    .invoice-box table tr.information table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                }

                /** RTL **/
                .invoice-box.rtl {
                    direction: rtl;
                    font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                }

                .invoice-box.rtl table {
                    text-align: right;
                }

                .invoice-box.rtl table tr td:nth-child(2) {
                    text-align: left;
                }
            </style>
        </head>

        <body>
            <div class="invoice-box">
                <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class="title" style="display: flex; justify-content: start; align-items:center; top: 0; left: 0; gap: 10px;">
                                        <img src={{image_url}} style="width: 70px; height: 70px; border-radius: 50%" />
                                        <p>${data.school_name}</p>
                                    </td>

                                    <td>
                                        Invoice #: ${data.invoiceNo}<br />
                                        Created: ${data.created_at}<br />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>
                                        ${data.school_name}, Inc.<br />
                                        ${data.address}<br />
                                    </td>

                                    <td>
                                        ${data.school_name}.<br />
                                        ${data.email}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr class="heading">
                        <td>Payment Method</td>

                        <td>${data.payment_method}</td>
                    </tr>

                    <br />

                    <tr class="heading">
                        <td>Item</td>

                        <td>Description</td>
                    </tr>

                    <tr class="item">
                        <td>${data.tag_name}</td>

                        <td>${data.description}</td>
                    </tr>

                </table>
            </div>
        </body>

        </html>
    `
}