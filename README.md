# C2B API Usage Guide

## Introduction
This guide provides instructions on how to use the C2B API to facilitate payments. The C2B (Customer to Business) API allows customers to initiate payments to a business.

## Prerequisites
Before using the C2B API, ensure you have the following:

- A valid Safaricom phone number starting with '07...'
- Access to the C2B API endpoint (e.g., `http://localhost:4000/pay`)
- An active database to store transactions

## Making a Payment Request
To initiate a payment request, follow these steps:

1. Make a POST request to the specified endpoint (`http://localhost:4000/pay`) with the following parameters in the request body:
   
   | Parameter | Description                            |
   |-----------|----------------------------------------|
   | phone     | The customer's Safaricom phone number   |
   | amount    | The amount to be paid                   |

   Example cURL command:

``` curl -X POST -H "Content-Type: application/json" -d '{"phone": "0797168636", "amount": 1}' http://localhost:4000/pay```


2. Upon receiving the request, the API will generate an STK (Sim Toolkit) push to the provided phone number.

## Handling STK Push Cancellation
If the customer cancels the payment via the STK push, the API will receive a notification and you will see the cancellation logged. 

## Storing Transactions
When a successful payment is made, the API should store the transaction details in a database for future reference.



- Phone number
- Amount paid
- Transaction ID
- Merchant request ID

## Database schema

```javascript
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PaymentSchema = new Schema({
  PhoneNumber: {
    type: String,
    required: true
  },
  trnx_id: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  merchantRequestId: {
    type: String,
    required: true
  }
}, { timestamps: true });

const PaymentModule = mongoose.model("PaymentSlips", PaymentSchema);
module.exports = PaymentModule;
```

