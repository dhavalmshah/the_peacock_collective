const axios = require("axios");

exports.searchByPinCode = async pincode => {
    const options = {
        url: `${process.env.POSTAL_PINCODE_API}/${pincode}`,
        method: "GET",
    };
    const response = await axios(options);
    const responseOK = response && (response.status >= 200 || response.status < 300);
    if (responseOK) {
        return response.data;
    }
    customErrorLogger(response.data);
};
