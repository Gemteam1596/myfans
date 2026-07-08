import { useState } from "react";

function Subscribe() {

    const [transactionHash, setTransactionHash] = useState("");

    const creator = {
        uid: "CREATOR_UID",
        name: "Nick",
        price: 25
    };

    const fan = {
        uid: "FAN_UID",
        email: "fan@email.com"
    };

    const submitPayment = async () => {

        const response = await fetch(
            "https://myfanshub.club/api/submit-payment.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    creator_uid: creator.uid,
                    fan_uid: fan.uid,
                    creator_name: creator.name,
                    fan_email: fan.email,
                    amount: creator.price,
                    transaction_hash: transactionHash

                })

            }
        );

        const result = await response.json();

        alert(result.message);

    };

    return (

        <div className="container py-5">

            <div
                className="card bg-dark text-white p-5 mx-auto"
                style={{ maxWidth: 600 }}
            >

                <h2 className="mb-4">
                    Premium Subscription
                </h2>

                <h4>
                    {creator.price} USDT
                </h4>

                <hr />

                <h5>Wallet Address</h5>

                <div className="alert alert-secondary">

                    TXXXXXXXXXXXXXXXXXXXXXXXXXXXX

                </div>

                <img
                    src="/images/usdt-qr.png"
                    alt="QR Code"
                    className="img-fluid mb-4"
                />

                <input

                    className="form-control mb-3"

                    placeholder="Transaction Hash"

                    value={transactionHash}

                    onChange={(e)=>setTransactionHash(e.target.value)}

                />

                <button

                    className="btn btn-success"

                    onClick={submitPayment}

                >

                    I've Paid

                </button>

            </div>

        </div>

    );

}

export default Subscribe;