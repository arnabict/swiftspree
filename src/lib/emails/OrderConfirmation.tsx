interface OrderConfirmationProps {
  orderNumber?: string;
  downloadLink?: string;
}

export default function OrderConfirmation({
  orderNumber = "12345",
  downloadLink = "#",
}: OrderConfirmationProps) {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Thank You for Your Order!
        </h1>

        <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />

        <div>
          <p>
            Your order <strong>#{orderNumber}</strong> has been confirmed and is
            being processed.
          </p>
          <p>You can download your product using the link below:</p>
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <a
            href={downloadLink}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Download Your Product
          </a>
        </div>

        <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />

        <div>
          <p style={{ fontSize: "12px", color: "#666666" }}>
            If you have any questions, please contact us at support@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
