export const prepareTemplateData = async (data, userId) => {
    const form = new FormData(data);

    const dataToSend = {
        userId,
        emailId: form.get('emailId'),
        schoolName: form.get('schoolName'),
        address: form.get('address'),
        phoneNo: [Number(form.get('phoneNo1')), Number(form.get('phoneNo2'))],
        gstNo: Number(form.get('gstNo')),
        accountNo: Number(form.get('accountNo')),
        benificiaryName: form.get('benificiaryName'),
        ifscCode: form.get('ifscCode'),
        upiId: form.get('upiId')
    }

    return dataToSend;
}