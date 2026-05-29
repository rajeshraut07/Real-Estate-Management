package com.example.Real_Estate_Management.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private RazorpayClient razorpayClient;

    public String createOrder() throws Exception {

        JSONObject options = new JSONObject();

        options.put("amount", 5000); // in paise (50 INR = 5000 paise)
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");

        Order order = razorpayClient.orders.create(options);

        return order.toString();
    }
}