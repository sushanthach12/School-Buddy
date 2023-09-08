export const prepareTemplateData = async (data, userId) => {
    const form = new FormData(data);

    const dataToSend = {
        userId,
        tagline: form.get('tagline'),
        emailId: form.get('email'),
        schoolName: form.get('schoolName'),
        address: [form.get('address')],
        phoneNo: [Number(form.get('phoneNumber1')), Number(form.get('phoneNumber2'))],
        gstNo: Number(form.get('gstnumber')),
        accountNo: Number(form.get('accountNumber')),
        benificiaryName: form.get('benificiaryName'),
        ifscCode: form.get('ifscCode'),
        upiId: form.get('upiid')
    }

    return dataToSend;
}