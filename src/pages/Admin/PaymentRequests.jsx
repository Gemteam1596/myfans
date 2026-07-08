import { useEffect, useState } from "react";

function PaymentRequests() {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = async () => {

    const response = await fetch(
      "https://myfanshub.club/api/get-payment-requests.php"
    );

    const result = await response.json();

    if (result.success) {
      setPayments(result.payments);
    }

  };

  const approvePayment = async (id) => {

    await fetch(
      "https://myfanshub.club/api/approve-payment.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    loadPayments();

  };

  const rejectPayment = async (id) => {

    await fetch(
      "https://myfanshub.club/api/reject-payment.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    loadPayments();

  };

  return (

    <div className="container py-5">

      <h2 className="mb-4">
        Payment Requests
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>
            <th>Creator</th>
            <th>Fan Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Transaction Hash</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr key={payment.id}>

              <td>{payment.id}</td>

              <td>{payment.creator_name}</td>

              <td>{payment.fan_email}</td>

              <td>{payment.amount} USDT</td>

              <td>{payment.status}</td>

              <td>{payment.transaction_hash}</td>

              <td>

                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => approvePayment(payment.id)}
                >
                  Approve
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => rejectPayment(payment.id)}
                >
                  Reject
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default PaymentRequests;